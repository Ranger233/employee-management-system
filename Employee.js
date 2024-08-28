class Employee {
  constructor(id, name, position, hourly_rate, pay_strategy) {
    this.id = id
    this.name = name
    this.position = position 
    this.hourly_rate = hourly_rate

    this.pay_strategy = pay_strategy; // strategy for calculating pay
    this.observers = [] // observers in this list will be notified when salary is updated 
  }

  updateName(new_name) {
    this.name = new_name
  }

  updatePosition(new_position) {
    this.position = new_position
  }

  updateRate(new_rate) {
    this.hourly_rate = new_rate
    this.notifyObservers()
  }

  // use the assigned pay strategy to calculate pay
  calculatePay() {
    return this.pay_strategy.calculate(this.hourly_rate)
  }

  displayDetails() {
    console.log(`
      Employee ${this.id} Detail:
      id: ${this.id}
      name: ${this.name}
      position: ${this.position}
      hourly_rate: ${this.hourly_rate}
      pay_strategy: ${this.pay_strategy?.name}
    `)
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this)
    }
  }
}

module.exports = Employee
