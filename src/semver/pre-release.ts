import { S } from '#dep/effect'
import { Version as VltVersion } from '@vltpkg/semver'

// ============================================================================
// Schema
// ============================================================================

export class PreRelease extends S.TaggedClass<PreRelease>('SemverPreRelease')('SemverPreRelease', {
  major: S.Number,
  minor: S.Number,
  patch: S.Number,
  prerelease: S.NonEmptyArray(S.Union(S.String, S.Number)),
  build: S.optional(S.Array(S.String)),
  version: S.instanceOf(VltVersion),
}, {
  identifier: 'PreRelease',
  title: 'Pre-Release',
  description: 'A semantic version with pre-release identifiers',
}) {}

// ============================================================================
// Constructors
// ============================================================================

export const make = PreRelease.make.bind(PreRelease)

// ============================================================================
// Type Guard
// ============================================================================

export const is = S.is(PreRelease)

// ============================================================================
// Codec
// ============================================================================

export const decode = S.decode(PreRelease)
export const decodeSync = S.decodeSync(PreRelease)
export const encode = S.encode(PreRelease)

// ============================================================================
// Equivalence
// ============================================================================

export const equivalence = S.equivalence(PreRelease)
