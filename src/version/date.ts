import { Schema as S } from 'effect'
import { DateOnly } from '../date-only/$.js'

export class Date extends S.TaggedClass<Date>()('VersionDate', {
  value: DateOnly.DateOnly,
}) {
  static is = S.is(Date)
}
