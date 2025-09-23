import { S } from '#dep/effect'
import { Version } from '#version'

/**
 * Represents a set of versions coverage.
 */
export class Set extends S.TaggedClass<Set>()('VersionCoverageSet', {
  versions: S.HashSet(Version.Version),
}) {
  static is = S.is(Set)
}
