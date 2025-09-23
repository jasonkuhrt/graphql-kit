import { S } from '#dep/effect'

export const Level = S.Literal('BREAKING', 'DANGEROUS', 'NON_BREAKING')

export type Level = typeof Level.Type
