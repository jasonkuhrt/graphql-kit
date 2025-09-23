import { DateOnly } from '#date-only'
import { Semver } from '#semver'
import { Test } from '@wollybeard/kit/test'
import { Match } from 'effect'
import { expect } from 'vitest'
import { Version } from './$.js'

// dprint-ignore
Test.Table.suite<string, { tag: string; string: string }>('decoding', [
    { name: 'decodes semver strings as SemverVersion',                                                  i: '1.2.3',                                                                                    o: { tag: 'VersionSemver',  string: '1.2.3' } },
    { name: 'decodes date strings as DateVersion',                                                      i: '2024-01-15',                                                                               o: { tag: 'VersionDate',    string: '2024-01-15' } },
    { name: 'decodes other strings as CustomVersion',                                                   i: 'v1.0-beta',                                                                                o: { tag: 'VersionCustom',  string: 'v1.0-beta' } },
    { name: 'prefers semver over date when ambiguous',                                                  i: '1.0.0',                                                                                    o: { tag: 'VersionSemver',  string: '1.0.0' } },
  ], ({ i, o }) => {
    const version = Version.decodeSync(i)
    expect(version._tag).toBe(o.tag)
    expect(Version.encodeSync(version)).toBe(o.string)
  })

// dprint-ignore
Test.Table.suite<{ v1: string; v2: string }, 'less' | 'greater'>('ordering', [
    { name: 'orders by type precedence: Semver > Date',                                                 i: { v1: '1.0.0',       v2: '2024-01-15' },     o: 'less' },
    { name: 'orders by type precedence: Date > Custom',                                                 i: { v1: '2024-01-15',  v2: 'custom' },         o: 'less' },
    { name: 'orders by type precedence: Semver > Custom',                                               i: { v1: '1.0.0',       v2: 'custom' },         o: 'less' },
    { name: 'orders within semver type (1.0.0 < 2.0.0)',                                                i: { v1: '1.0.0',       v2: '2.0.0' },          o: 'less' },
    { name: 'orders within semver type (2.0.0 > 1.0.0)',                                                i: { v1: '2.0.0',       v2: '1.0.0' },          o: 'greater' },
    { name: 'orders within date type (2024-01-15 < 2024-02-15)',                                        i: { v1: '2024-01-15',  v2: '2024-02-15' },     o: 'less' },
    { name: 'orders within date type (2024-02-15 > 2024-01-15)',                                        i: { v1: '2024-02-15',  v2: '2024-01-15' },     o: 'greater' },
    { name: 'orders within custom type (alpha < beta)',                                                 i: { v1: 'alpha',       v2: 'beta' },           o: 'less' },
    { name: 'orders within custom type (beta > alpha)',                                                 i: { v1: 'beta',        v2: 'alpha' },          o: 'greater' },
  ], ({ i, o }) => {
    const version1 = Version.decodeSync(i.v1)
    const version2 = Version.decodeSync(i.v2)
    const result = Version.order(version1, version2)

    if (o === 'less') {
      expect(result).toBeLessThan(0)
    } else {
      expect(result).toBeGreaterThan(0)
    }
  })

// dprint-ignore
Test.Table.suite<{ v1: string; v2: string }, boolean>('equivalence', [
    { name: 'considers same versions equal',                                                            i: { v1: '1.0.0',       v2: '1.0.0' },          o: true },
    { name: 'considers different types unequal',                                                        i: { v1: '1.0.0',       v2: '2024-01-15' },     o: false },
    { name: 'considers different values of same type unequal',                                          i: { v1: '1.0.0',       v2: '2.0.0' },          o: false },
  ], ({ i, o }) => {
    const version1 = Version.decodeSync(i.v1)
    const version2 = Version.decodeSync(i.v2)
    expect(Version.equivalence(version1, version2)).toBe(o)
  })

// dprint-ignore
Test.Table.suite<string, string>('pattern matching', [
    { name: 'matches on integer version',                                                               i: '123',                                                                                       o: 'Integer: 123' },
    { name: 'matches on semver version',                                                                i: '1.2.3',                                                                                    o: 'Semver: 1.2.3' },
    { name: 'matches on date version',                                                                  i: '2024-01-15',                                                                               o: 'Date: 2024-01-15' },
    { name: 'matches on custom version',                                                                i: 'v1.0-beta',                                                                                o: 'Custom: v1.0-beta' },
  ], ({ i, o }) => {
    const version = Version.decodeSync(i)
    const result = Match.value(version).pipe(
      Match.tag('VersionInteger', (v) => `Integer: ${v.value}`),
      Match.tag('VersionSemver', (v) => `Semver: ${v.value}`),
      Match.tag('VersionDate', (v) => `Date: ${v.value}`),
      Match.tag('VersionCustom', (v) => `Custom: ${v.value}`),
      Match.exhaustive
    )
    expect(result).toBe(o)
  })

// dprint-ignore
Test.Table.suite<string, { tag: string; string: string }, { type: 'semver' | 'date' | 'custom' }>('importers', [
    { name: 'creates from semver',         type: 'semver',  i: '1.2.3',        o: { tag: 'VersionSemver',  string: '1.2.3' } },
    { name: 'creates from date',           type: 'date',    i: '2024-01-15',   o: { tag: 'VersionDate',    string: '2024-01-15' } },
    { name: 'creates from custom string',  type: 'custom',  i: 'v1.0-beta',    o: { tag: 'VersionCustom',  string: 'v1.0-beta' } },
  ], ({ i, o, type }) => {
    let version: Version.Version

    switch (type) {
      case 'semver': {
        const semver = Semver.decodeSync(i)
        version = Version.fromSemver(semver)
        break
      }
      case 'date': {
        const dateOnly = DateOnly.decodeSync(i)
        version = Version.fromDateOnly(dateOnly)
        break
      }
      case 'custom': {
        version = Version.fromCustom(i)
        break
      }
    }

    expect(version._tag).toBe(o.tag)
    expect(Version.encodeSync(version)).toBe(o.string)
  })
