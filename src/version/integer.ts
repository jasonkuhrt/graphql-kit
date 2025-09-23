import { Schema as S } from 'effect'

export class Integer extends S.TaggedClass<Integer>()('VersionInteger', {
  value: S.Number,
}) {
  static is = S.is(Integer)
}
