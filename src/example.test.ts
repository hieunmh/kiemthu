import { Example } from "./example";

test('age < 0 && ticket = one', () => {
  const person = new Example(-1, 'one');
  expect(person.calculateMoney(person)).toBe('invalid age');
})

test('age < 0 && ticket = interline', () => {
  const person = new Example(-1, 'interline');
  expect(person.calculateMoney(person)).toBe('invalid age');
})

test('0 <= age <=23 && ticket = one', () => {
  const person = new Example(18, 'one');
  expect(person.calculateMoney(person)).toBe('55.000 VND');
})


test('0 <= age < 23 && ticket = interline', () => {
  const person = new Example(18, 'interline');
  expect(person.calculateMoney(person)).toBe('100.000 VND');
})

test('age > 23 && tikket = one', () => {
  const person = new Example(30, 'one');
  expect(person.calculateMoney(person)).toBe('110.000 VND');
})

test('age > 23 && ticket = interline', () => {
  const person = new Example(30, 'interline');
  expect(person.calculateMoney(person)).toBe('200.000 VND');
})