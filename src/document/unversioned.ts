import { Schema as S } from 'effect'

export class Unversioned extends S.TaggedClass<Unversioned>('DocumentUnversioned')('DocumentUnversioned', {
  document: S.String,
}) {
  static is = S.is(Unversioned)
}
