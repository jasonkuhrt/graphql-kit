import { Grafaid } from '#grafaid'
import { Test } from '@wollybeard/kit/test'
import { buildSchema } from 'graphql'
import { describe, expect, test } from 'vitest'
import { GraphQLSchemaPath } from './$.js'

describe('.parse', () => {
  // dprint-ignore
  Test.Table.suite<string, void>('valid paths', [
    // Simple types
    { name: 'User type',           i: 'User', o: undefined },
    { name: 'String scalar',       i: 'String', o: undefined },
    { name: 'input type',          i: 'CreateUserInput', o: undefined },

    // Field access
    { name: 'simple field',        i: 'User.name', o: undefined },
    { name: 'nested field',        i: 'User.posts.title', o: undefined },

    // Argument access
    { name: 'field argument',      i: 'User.posts$limit', o: undefined },

    // Resolved types
    { name: 'field resolved type', i: 'User.posts#', o: undefined },
    { name: 'arg resolved type',   i: 'User.posts$limit#', o: undefined },

    // Input types
    { name: 'input field',         i: 'CreateUserInput.email', o: undefined },
    { name: 'nested input',        i: 'CreateUserInput.address.street', o: undefined },

    // With version
    { name: 'with version',        i: 'v1.0:User', o: undefined },
    { name: 'multi version',       i: 'v1.0,2.0:User.posts', o: undefined },
    { name: 'version range',       i: 'v1.0-3.0:Query.users', o: undefined },
  ], ({ i }) => {
    const result = GraphQLSchemaPath.parse(i)
    expect({
      input: i,
      result,
    }).toMatchSnapshot()
  })

  // dprint-ignore
  Test.Table.suite<string, void>('invalid paths', [
    { name: 'trailing dot',        i: 'User.', o: undefined },
    { name: 'double dot',          i: 'User..name', o: undefined },
    { name: 'invalid prefix',      i: 'User$', o: undefined },
    { name: 'number start',        i: '123User', o: undefined },
    { name: 'invalid char',        i: 'User!', o: undefined },
    { name: 'empty string',        i: '', o: undefined },
  ], ({ i }) => {
    let error: any
    try {
      GraphQLSchemaPath.parse(i)
    } catch (e) {
      error = e
    }
    expect({
      input: i,
      error: error?.message || error,
    }).toMatchSnapshot()
  })
})

describe('.print', () => {
  // dprint-ignore
  Test.Table.suite<string, void>('round-trip paths', [
    { name: 'simple type',         i: 'User', o: undefined },
    { name: 'field access',        i: 'User.name', o: undefined },
    { name: 'nested field',        i: 'User.posts.title', o: undefined },
    { name: 'with argument',       i: 'User.posts$limit', o: undefined },
    { name: 'resolved type',       i: 'User.posts#', o: undefined },
    { name: 'arg resolved',        i: 'User.posts$limit#', o: undefined },
    { name: 'input field',         i: 'CreateUserInput.email', o: undefined },
    { name: 'nested input',        i: 'CreateUserInput.address.street', o: undefined },
    { name: 'with version',        i: 'v1.0:User', o: undefined },
    { name: 'multi version',       i: 'v1.0,2.0:User.posts', o: undefined },
    { name: 'version range',       i: 'v1.0-3.0:Query.users', o: undefined },
  ], ({ i }) => {
    const parsed = GraphQLSchemaPath.parse(i)
    const printed = GraphQLSchemaPath.print(parsed)
    expect({
      input: i,
      parsed,
      printed,
      roundTripSuccess: printed === i,
    }).toMatchSnapshot()
  })
})

describe('.decodeSync', () => {
  test('decodes string to AST', () => {
    const result = GraphQLSchemaPath.decodeSync('User.posts$limit')
    expect(result._tag).toBe('GraphQLPathRoot')
    expect(result.next._tag).toBe('GraphQLPathSegmentType')
    expect(result.next.name).toBe('User')
    expect(result.next.next?._tag).toBe('GraphQLPathSegmentField')
    expect((result.next.next as any)?.name).toBe('posts')
    expect((result.next.next as any)?.next?._tag).toBe('GraphQLPathSegmentArgument')
    expect((result.next.next as any)?.next?.name).toBe('limit')
  })

  test('round-trips through codec', () => {
    const original = 'User.name'
    const decoded = GraphQLSchemaPath.decodeSync(original)
    const encoded = GraphQLSchemaPath.encodeSync(decoded)
    expect(encoded).toBe(original)
  })

  test('with literal string gets exact type', () => {
    // This test verifies type-level parsing works
    const userPath = GraphQLSchemaPath.decodeSync('User')
    // Type should be ParsePath<'User'> not just GraphQLSchemaPath
    expect(userPath.next.name).toBe('User')
    expect(userPath.next.next).toBeUndefined()

    const complexPath = GraphQLSchemaPath.decodeSync('User.posts$limit')
    expect(complexPath.next.name).toBe('User')
    // TypeScript knows the exact structure from the literal
    expect((complexPath.next.next as any)?.name).toBe('posts')
  })

  test('throws on invalid path', () => {
    expect(() => GraphQLSchemaPath.decodeSync('123Invalid')).toThrow()
    expect(() => GraphQLSchemaPath.decodeSync('')).toThrow()
    expect(() => GraphQLSchemaPath.decodeSync('User..posts')).toThrow()
  })
})

describe('resolver: graphql-schema', () => {
  const schema = buildSchema(`
    type Query {
      user(id: ID!): User
      users(limit: Int): [User!]!
    }

    type User {
      id: ID!
      name: String!
      posts(first: Int): [Post!]!
    }

    type Post {
      id: ID!
      title: String!
      content: String
    }
  `)

  const resolver = GraphQLSchemaPath.Resolvers.GraphqlSchema.create({
    schema,
  })

  const getTypeOrThrow = (name: string) => Grafaid.Schema.Helpers.getTypeOrThrow(schema, name)
  const getFieldedTypeOrThrow = (name: string) => Grafaid.Schema.Helpers.getFieldedTypeOrThrow(schema, name)

  Test.Table.suite<string, { left?: RegExp } | { right?: Grafaid.Schema.TypesLike.Any }>(
    'path resolution',
    // dprint-ignore
    [
      { name: 'resolves type',                    i: 'User',                o: { right: getTypeOrThrow('User') } },
      { name: 'resolves field',                   i: 'User.name',           o: { right: getFieldedTypeOrThrow('User').getFields()['name'] } },
      { name: 'resolves field argument',          i: 'User.posts$first',    o: { right: (getFieldedTypeOrThrow('User').getFields()['posts'] as any).args[0] } },
      { name: 'resolves field resolved type',     i: 'User.posts#',         o: { right: getTypeOrThrow('Post') } },
      { name: 'resolves argument resolved type',  i: 'User.posts$first#',   o: { right: getTypeOrThrow('Int') } },
      { name: 'resolves nested field',            i: 'User.posts.title',    o: { left: /KindMismatch/ } },
      { name: 'resolves query field',             i: 'Query.user',          o: { right: getFieldedTypeOrThrow('Query').getFields()['user'] } },
      { name: 'resolves query field argument',    i: 'Query.user$id',       o: { right: (getFieldedTypeOrThrow('Query').getFields()['user'] as any).args[0] } },
      { name: 'fails on non-existent type',       i: 'NonExistent',         o: { left: /NodeNotFound/ } },
      { name: 'fails on non-existent field',      i: 'User.nonExistent',    o: { left: /NodeNotFound/ } },
      { name: 'fails on non-existent argument',   i: 'User.name$foo',       o: { left: /NodeNotFound/ } },
    ],
    ({ i, o }) => {
      const ast = GraphQLSchemaPath.parse(i)
      const result = resolver(ast)

      if ('right' in o) {
        expect(result._tag).toBe('Right')
        if (result._tag === 'Right') {
          expect(result.right).toBe(o.right)
        }
      } else if ('left' in o) {
        expect(result._tag).toBe('Left')
        if (result._tag === 'Left' && o.left) {
          // TraversalError has a cause field with the actual StepFailure
          expect(result.left.cause._tag).toMatch(o.left)
        }
      }
    },
  )
})
