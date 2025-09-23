import { S } from '#dep/effect'
import { Version } from '#version'

/**
 * Represents a single version coverage.
 */
export class One extends S.TaggedClass<One>()('VersionCoverageOne', {
  version: Version.Version,
}) {
  static is = S.is(One)
}
