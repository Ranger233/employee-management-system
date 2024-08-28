const Employee = require('./Employee')
const { FullTimePayStrategy } = require('./PayStrategies')

class FullTimeEmployee extends Employee {
  constructor(id, name, position, hourly_rate) {
    super(id, name, position, hourly_rate, new FullTimePayStrategy());
  }
}

module.exports = FullTimeEmployee