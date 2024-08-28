const Employee = require('./Employee')
const FullTimeEmployee = require('./FulltimeEmployee')
const PartTimeEmployee = require('./ParttimeEmployee')

class EmployeeFactory {
  constructor() {}

  createEmployee(id, name = 'default', position = 'default employee', hourly_rate = this.default_hourly_rate, type, hours_per_week) {
    let new_employee
    if (!type) {
      new_employee = new Employee(id, name, position, hourly_rate)
    }
    else if (type === 'full_time') {
      new_employee = new FullTimeEmployee(id, name, position, hourly_rate)
    }
    else if (type === 'part_time') {
      new_employee = new PartTimeEmployee(id, name, position, hourly_rate, hours_per_week)
    }
    return new_employee
  }

}

module.exports = EmployeeFactory
