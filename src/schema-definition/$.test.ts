import { Test } from '@wollybeard/kit/test'
import { expect } from 'vitest'
import * as SchemaDefinition from './schema-definition.js'

const sdl1 = `
  type Query {
    hello: String
    world: String
  }
`

const sdl2 = `
  type Query {
    world: String
    hello: String
  }
`

// dprint-ignore
Test.Table.suite<string, boolean | string, { operation: 'decode' | 'isEmpty' }>('SchemaDefinition', [
  { name: 'sdl.decode creates schema from SDL string',  i: sdl1,          operation: 'decode',  o: 'type Query' },
  { name: 'isEmpty detects empty schemas',              i: `type Query`,  operation: 'isEmpty', o: true },
  { name: 'isEmpty returns false for non-empty',        i: sdl1,          operation: 'isEmpty', o: false },
], ({ i, o, operation }) => {
  const schema = SchemaDefinition.sdl.decode(i)

  switch (operation) {
    case 'decode':
      expect(SchemaDefinition.is(schema)).toBe(true)
      expect(SchemaDefinition.sdl.encode(schema)).toContain(o as string)
      break
    case 'isEmpty':
      expect(SchemaDefinition.isEmpty(schema as any)).toBe(o)
      break
  }
})

// dprint-ignore
Test.Table.suite<{ sdl1: string; sdl2: string }, boolean>('equivalence', [
  { name: 'different field order means different SDL',  i: { sdl1: sdl1, sdl2: sdl2 }, o: false },
  { name: 'same SDL produces equivalent schemas',       i: { sdl1: sdl1, sdl2: sdl1 }, o: true },
], ({ i, o }) => {
  const schema1 = SchemaDefinition.sdl.decode(i.sdl1)
  const schema2 = SchemaDefinition.sdl.decode(i.sdl2)
  expect(SchemaDefinition.equivalence(schema1 as any, schema2 as any)).toBe(o)
})
