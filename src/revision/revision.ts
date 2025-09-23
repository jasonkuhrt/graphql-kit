import { Change } from '#change'
import { DateOnly } from '#date-only'
import { Order, Schema as S } from 'effect'

export class Revision extends S.TaggedClass<Revision>('Revision')('Revision', {
  date: DateOnly.DateOnly,
  changes: S.Array(Change.Change),
}, {
  identifier: 'Revision',
  title: 'Revision',
  description: 'A revision in the schema history',
}) {
  static is = S.is(Revision)

  static order: Order.Order<Revision> = Order.reverse(Order.mapInput(DateOnly.order, (revision) => revision.date))

  static min = Order.min(Revision.order)

  static max = Order.max(Revision.order)

  static lessThan = Order.lessThan(Revision.order)

  static greaterThan = Order.greaterThan(Revision.order)

  // Instance methods for working with changes
  get changesBreaking(): Change.Change[] {
    return this.changes.filter(c => c.criticality.isBreaking)
  }

  get changesDangerous(): Change.Change[] {
    return this.changes.filter(c => c.criticality.isDangerous)
  }

  get changesSafe(): Change.Change[] {
    return this.changes.filter(c => c.criticality.isSafe)
  }

  hasChangeType(changeType: string): boolean {
    return this.changes.some(c => c._tag === changeType)
  }

  get hasBreakingChanges(): boolean {
    return this.changes.some(c => c.criticality.isBreaking)
  }
}
