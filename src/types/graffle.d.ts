declare module 'graffle' {
  import type { IntrospectionQuery } from 'graphql'

  export interface GraffleInstance {
    transport(options: { url: string; headers: Record<string, string> }): GraffleInstance
    use(extension: any): GraffleInstance
    introspect(): Promise<IntrospectionQuery>
  }

  export const Graffle: {
    create(): GraffleInstance
  }
}

declare module 'graffle/extensions/introspection' {
  export function Introspection(): any
}