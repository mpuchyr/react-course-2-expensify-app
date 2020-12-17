import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenes', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0)
})

test('should correctly add up a single expense', () => {
    const total = expensesTotal([ expenses[0] ])
    expect(total).toBe(expenses[0].amount)
})

test('should correctly add up multiple expenses', () => {
    const expectedTotal = expenses[0].amount + expenses[1].amount
    const total = expensesTotal([ expenses[0], expenses[1] ])
    expect(total).toBe(expectedTotal)
})