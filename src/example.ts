export class Example {
  age: number;
  ticket: string;

  constructor(age: number, ticket: string) {
    this.age = age;
    this.ticket = ticket;
  }

  setAge(age: number) {
    this.age = age;
  }

  setTicket(ticket: string) {
    this.ticket = ticket;
  }

  getAge = () => {
    return this.age;
  }

  getTicket = () => {
    return this.ticket;
  }

  calculateMoney = (person: Example) => {
    let cost: string = '0';

    if (person.age < 0) {
      cost = '-1';
    }
    else {
      if (person.age >= 0 && person.age <= 23) {
        if (person.ticket === 'one') {
          cost = '55.000 VND';
        }
        else if (person.ticket === 'interline') {
          cost = '100.000 VND';
        }
      }
      else if (person.age > 23) {
        if (person.ticket === 'one') {
          cost = '110.000 VND';
        }
        else if (person.ticket === 'interline') {
          cost = '200.000 VND';
        }
      }
    }

    return cost;
  }
}