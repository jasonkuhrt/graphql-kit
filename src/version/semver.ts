import { Schema as S } from 'effect'

export class Semver extends S.TaggedClass<Semver>()('VersionSemver', {
  value: S.String,
}) {
  static is = S.is(Semver)
}
