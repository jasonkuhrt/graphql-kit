import { S } from '#dep/effect'

/**
 * Represents unversioned coverage that applies to all versions.
 */
export class Unversioned extends S.TaggedClass<Unversioned>()('VersionCoverageUnversioned', {}) {
  static is = S.is(Unversioned)
}
