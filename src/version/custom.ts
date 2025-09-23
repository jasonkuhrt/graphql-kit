import { Schema as S } from 'effect'

export class Custom extends S.TaggedClass<Custom>()('VersionCustom', {
  value: S.String,
}) {
  static is = S.is(Custom)
}
