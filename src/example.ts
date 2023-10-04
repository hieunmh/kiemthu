export class Example {
  age: number;
  ticket: string;

  constructor(age: number, ticket: string) {
    this.age = age;
    this.ticket = ticket;
  }

  setAge(age: number): void {
    this.age = age;
  }

  setTicket(ticket: string): void {
    this.ticket = ticket;
  }

  getAge = (): number => {
    return this.age;
  }

  getTicket = (): string => {
    return this.ticket;
  }

  calculateMoney = (person: Example) : string => {
    let res: string = '0';

    if (person.age < 0) {
      res = 'invalid age';
    }
    else {
      if (person.age >= 0 && person.age <= 23) {
        if (person.ticket === 'one') {
          res = '55.000 VND';
        }
        else if (person.ticket === 'interline') {
          res = '100.000 VND';
        }
      }
      else if (person.age > 23) {
        if (person.ticket === 'one') {
          res = '110.000 VND';
        }
        else if (person.ticket === 'interline') {
          res = '200.000 VND';
        }
      }
    }

    return res;
  }
}