import { S } from '#dep/effect'
import { Level } from './level.js'

export class Criticality extends S.Class<Criticality>('Criticality')({
  level: Level,
  reason: S.optional(S.String),
}, {
  title: 'Change Criticality',
  description: 'The criticality assessment of a GraphQL schema change',
}) {
  static is = S.is(Criticality)

  // Instance getters for checking criticality level
  get isBreaking(): boolean {
    return this.level === 'BREAKING'
  }

  get isDangerous(): boolean {
    return this.level === 'DANGEROUS'
  }

  get isSafe(): boolean {
    return this.level === 'NON_BREAKING'
  }
}
