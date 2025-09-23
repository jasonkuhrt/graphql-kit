import { Schema as S } from 'effect'

export class DocumentUnversioned
  extends S.TaggedClass<DocumentUnversioned>('DocumentUnversioned')('DocumentUnversioned', {
    document: S.String,
  })
{
  static is = S.is(DocumentUnversioned)
}
