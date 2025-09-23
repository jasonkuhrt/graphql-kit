import { Test } from '@wollybeard/kit/test'
import { Effect } from 'effect'
import { expect } from 'vitest'
import { Semver } from './$.js'

// dprint-ignore
Test.Table.suite<string, void, { sync: boolean; shouldSucceed: boolean; major?: number; minor?: number; patch?: number; prerelease?: (string | number)[]; build?: string[] }>('decoding', [
  { name: 'creates a valid semver from string',         i: '1.2.3',                    o: undefined, sync: false, shouldSucceed: true,  major: 1, minor: 2, patch: 3 },
  { name: 'fails on invalid semver string',             i: 'invalid',                  o: undefined, sync: false, shouldSucceed: false },
  { name: 'creates a valid semver synchronously',       i: '1.2.3-beta.1+build.123',   o: undefined, sync: true,  shouldSucceed: true,  major: 1, minor: 2, patch: 3, prerelease: ['beta', 1], build: ['build', '123'] },
], async ({ i, sync, shouldSucceed, major, minor, patch, prerelease, build }) => {
  if (sync) {
    const version = Semver.decodeSync(i)
    expect(Semver.getMajor(version)).toBe(major)
    expect(Semver.getMinor(version)).toBe(minor)
    expect(Semver.getPatch(version)).toBe(patch)
    if (prerelease) {
      expect(Semver.getPrerelease(version)).toEqual(prerelease)
    }
    if (build) {
      expect(Semver.getBuild(version)).toEqual(build)
    }
  } else {
    if (shouldSucceed) {
      const version = Semver.decodeSync(i)
      expect(Semver.getMajor(version)).toBe(major)
      expect(Semver.getMinor(version)).toBe(minor)
      expect(Semver.getPatch(version)).toBe(patch)
    } else {
      await expect(Effect.runPromise(Semver.decode(i))).rejects.toThrow()
    }
  }
})

// dprint-ignore
Test.Table.suite<string, { tag: string; isOfficial: boolean; isPreRelease: boolean }, { build?: string[] }>('discriminated union', [
  { name: 'correctly identifies official releases',                                                    i: '1.2.3',                                                                                  o: { tag: 'SemverOfficialRelease', isOfficial: true,  isPreRelease: false } },
  { name: 'correctly identifies pre-releases',                                                         i: '1.2.3-beta',                                                                             o: { tag: 'SemverPreRelease',      isOfficial: false, isPreRelease: true } },
  { name: 'handles build metadata on official release',                                                i: '1.2.3+build.123',                                                                        o: { tag: 'SemverOfficialRelease', isOfficial: true,  isPreRelease: false }, build: ['build', '123'] },
  { name: 'handles build metadata on pre-release',                                                     i: '1.2.3-beta+build.123',                                                                   o: { tag: 'SemverPreRelease',      isOfficial: false, isPreRelease: true },  build: ['build', '123'] },
], ({ i, o, build }) => {
  const semver = Semver.decodeSync(i)
  expect(semver._tag).toBe(o.tag)
  expect(Semver.OfficialRelease.is(semver)).toBe(o.isOfficial)
  expect(Semver.PreRelease.is(semver)).toBe(o.isPreRelease)
  if (build) {
    expect(Semver.getBuild(semver)).toEqual(build)
  }
})

// dprint-ignore
Test.Table.suite<string, string>('pattern matching', [
  { name: 'matches on official release',                                                               i: '1.2.3',                                                                                  o: 'Official: 1.2.3' },
  { name: 'matches on pre-release',                                                                    i: '1.2.3-beta.1',                                                                           o: 'Pre-release: 1.2.3-beta.1' },
], ({ i, o }) => {
  const semver = Semver.decodeSync(i)
  const result = Semver.match(
    (official) => `Official: ${official.major}.${official.minor}.${official.patch}`,
    (prerelease) =>
      `Pre-release: ${prerelease.major}.${prerelease.minor}.${prerelease.patch}-${prerelease.prerelease.join('.')}`,
  )(semver)
  expect(result).toBe(o)
})

// dprint-ignore
Test.Table.suite<{ v1: string; v2: string }, number | boolean, { method: 'order' | 'greaterThan' | 'lessThan' | 'equivalence' }>('comparisons', [
  { name: 'compares versions correctly (v1 < v2)',      method: 'order',        i: { v1: '1.0.0', v2: '2.0.0' }, o: -1 },
  { name: 'compares versions correctly (v1 > v2)',      method: 'order',        i: { v1: '2.0.0', v2: '1.0.0' }, o: 1 },
  { name: 'compares versions correctly (v1 = v2)',      method: 'order',        i: { v1: '1.0.0', v2: '1.0.0' }, o: 0 },
  { name: 'checks greater than (v1 < v2)',              method: 'greaterThan',  i: { v1: '1.0.0', v2: '2.0.0' }, o: true },
  { name: 'checks greater than (v1 > v2)',              method: 'greaterThan',  i: { v1: '2.0.0', v2: '1.0.0' }, o: false },
  { name: 'checks less than (v1 < v2)',                 method: 'lessThan',     i: { v1: '2.0.0', v2: '1.0.0' }, o: true },
  { name: 'checks less than (v1 > v2)',                 method: 'lessThan',     i: { v1: '1.0.0', v2: '2.0.0' }, o: false },
  { name: 'checks equality (equal)',                    method: 'equivalence',  i: { v1: '1.0.0', v2: '1.0.0' }, o: true },
  { name: 'checks equality (not equal)',                method: 'equivalence',  i: { v1: '1.0.0', v2: '2.0.0' }, o: false },
], ({ i, o, method }) => {
  const version1 = Semver.decodeSync(i.v1)
  const version2 = Semver.decodeSync(i.v2)

  switch (method) {
    case 'order':
      expect(Semver.order(version1, version2)).toBe(o)
      break
    case 'greaterThan':
      expect(Semver.greaterThan(version1)(version2)).toBe(o)
      break
    case 'lessThan':
      expect(Semver.lessThan(version1)(version2)).toBe(o)
      break
    case 'equivalence':
      expect(Semver.equivalence(version1, version2)).toBe(o)
      break
  }
})

// dprint-ignore
Test.Table.suite<unknown, boolean>('validation', [
  { name: 'validates 1.2.3',                                                                           i: Semver.decodeSync('1.2.3'),                                                                o: true },
  { name: 'validates 0.0.0',                                                                           i: Semver.decodeSync('0.0.0'),                                                                o: true },
  { name: 'validates 1.2.3-beta',                                                                      i: Semver.decodeSync('1.2.3-beta'),                                                           o: true },
  { name: 'validates 1.2.3+build',                                                                     i: Semver.decodeSync('1.2.3+build'),                                                          o: true },
  { name: 'rejects plain object',                                                                      i: { major: 1, minor: 2, patch: 3 },                                                          o: false },
  { name: 'rejects string',                                                                            i: '1.2.3',                                                                                    o: false },
  { name: 'rejects null',                                                                              i: null,                                                                                       o: false },
], ({ i, o }) => {
  expect(Semver.is(i)).toBe(o)
})

// dprint-ignore
Test.Table.suite<'major' | 'minor' | 'patch', string>('utilities', [
  { name: 'increments major version',                                                                  i: 'major',                                                                                    o: '2.0.0' },
  { name: 'increments minor version',                                                                  i: 'minor',                                                                                    o: '1.3.0' },
  { name: 'increments patch version',                                                                  i: 'patch',                                                                                    o: '1.2.4' },
], ({ i, o }) => {
  const v = Semver.decodeSync('1.2.3')
  const incremented = Semver.increment(v, i)
  expect(incremented.version.toString()).toBe(o)
})

// dprint-ignore
Test.Table.suite<{ versions?: string[]; v1?: string; v2?: string }, string[] | string | boolean, { test: 'sort' | 'min' | 'max' | 'equivalence' }>('ordering and equivalence', [
  { name: 'provides correct ordering',                   test: 'sort',        i: { versions: ['2.0.0', '1.0.0', '1.5.0'] },         o: ['1.0.0', '1.5.0', '2.0.0'] },
  { name: 'finds min',                                   test: 'min',         i: { v1: '1.0.0', v2: '2.0.0' },                      o: '1.0.0' },
  { name: 'finds max',                                   test: 'max',         i: { v1: '1.0.0', v2: '2.0.0' },                      o: '2.0.0' },
  { name: 'checks structural equality (equal)',          test: 'equivalence', i: { v1: '1.0.0', v2: '1.0.0' },                      o: true },
  { name: 'checks structural equality (not equal)',      test: 'equivalence', i: { v1: '1.0.0', v2: '2.0.0' },                      o: false },
], ({ i, o, test }) => {
  switch (test) {
    case 'sort': {
      const versionObjs = i.versions!.map(v => Semver.decodeSync(v))
      const sorted = [...versionObjs].sort(Semver.order)
      expect(sorted.map(v => v.version.toString())).toEqual(o)
      break
    }
    case 'min': {
      const version1 = Semver.decodeSync(i.v1!)
      const version2 = Semver.decodeSync(i.v2!)
      const result = Semver.min(version1, version2)
      expect(result.version.toString()).toBe(o)
      break
    }
    case 'max': {
      const version1 = Semver.decodeSync(i.v1!)
      const version2 = Semver.decodeSync(i.v2!)
      const result = Semver.max(version1, version2)
      expect(result.version.toString()).toBe(o)
      break
    }
    case 'equivalence': {
      const version1 = Semver.decodeSync(i.v1!)
      const version2 = Semver.decodeSync(i.v2!)
      expect(Semver.equivalence(version1, version2)).toBe(o)
      break
    }
  }
})

// dprint-ignore
Test.Table.suite<{ major: number; minor: number; patch: number; prerelease?: string | undefined; build?: string | undefined }, string | undefined>('fromParts', [
  { name: 'creates version from basic parts',                                                          i: { major: 1, minor: 2, patch: 3 },                                                                      o: '1.2.3' },
  { name: 'creates version with prerelease',                                                           i: { major: 1, minor: 2, patch: 3, prerelease: 'beta.1' },                                               o: '1.2.3-beta.1' },
  { name: 'creates version with prerelease and build',                                                 i: { major: 1, minor: 2, patch: 3, prerelease: 'beta.1', build: 'build.123' },                           o: '1.2.3-beta.1+build.123' },
  { name: 'creates version with build only',                                                           i: { major: 1, minor: 2, patch: 3, prerelease: undefined, build: 'build.123' },                          o: '1.2.3+build.123' },
], ({ i, o }) => {
  const version = Semver.fromParts(i.major, i.minor, i.patch, i.prerelease, i.build)
  expect(version.version.toString()).toBe(o)
})

// dprint-ignore
Test.Table.suite<string, boolean>('satisfies', [
  { name: 'satisfies >=1.0.0',                                                                         i: '>=1.0.0',                                                                                  o: true },
  { name: 'satisfies ^1.0.0',                                                                          i: '^1.0.0',                                                                                   o: true },
  { name: 'satisfies ~1.2.0',                                                                          i: '~1.2.0',                                                                                   o: true },
  { name: 'does not satisfy 2.x',                                                                      i: '2.x',                                                                                      o: false },
  { name: 'invalid range returns false',                                                               i: 'invalid range',                                                                            o: false },
], ({ i, o }) => {
  const v = Semver.decodeSync('1.2.3')
  expect(Semver.satisfies(v, i)).toBe(o)
})
