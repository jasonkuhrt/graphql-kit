import { S } from '#dep/effect'
import { Version as VltVersion } from '@vltpkg/semver'

// ============================================================================
// Schema
// ============================================================================

export class OfficialRelease extends S.TaggedClass<OfficialRelease>('SemverOfficialRelease')('SemverOfficialRelease', {
  major: S.Number,
  minor: S.Number,
  patch: S.Number,
  build: S.optional(S.Array(S.String)),
  version: S.instanceOf(VltVersion),
}, {
  identifier: 'OfficialRelease',
  title: 'Official Release',
  description: 'A semantic version that is an official release (no pre-release identifiers)',
}) {}

// ============================================================================
// Constructors
// ============================================================================

export const make = OfficialRelease.make.bind(OfficialRelease)

// ============================================================================
// Type Guard
// ============================================================================

export const is = S.is(OfficialRelease)

// ============================================================================
// Codec
// ============================================================================

export const decode = S.decode(OfficialRelease)
export const decodeSync = S.decodeSync(OfficialRelease)
export const encode = S.encode(OfficialRelease)

// ============================================================================
// Equivalence
// ============================================================================

export const equivalence = S.equivalence(OfficialRelease)
