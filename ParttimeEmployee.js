const Employee = require('./Employee')
const { PartTimePayStrategy } = require('./PayStrategies')

class PartTimeEmployee extends Employee {
  constructor(id, name, position, hourly_rate, hours_per_week) {
    super(id, name, position, hourly_rate, new PartTimePayStrategy(hours_per_week));
  }
}

module.exports = PartTimeEmployee