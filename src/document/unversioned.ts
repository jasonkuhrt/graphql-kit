import { Schema as S } from 'effect'

// ============================================================================
// Schema
// ============================================================================

export class DocumentUnversioned
  extends S.TaggedClass<DocumentUnversioned>('DocumentUnversioned')('DocumentUnversioned', {
    document: S.String,
  })
{}

// ============================================================================
// Type Guards
// ============================================================================

export const is = S.is(DocumentUnversioned)

// ============================================================================
// Codec
// ============================================================================

export const decode = S.decode(DocumentUnversioned)
export const decodeSync = S.decodeSync(DocumentUnversioned)
export const encode = S.encode(DocumentUnversioned)
