const EmployeeFactory = require('./EmployeeFactory')
const Employee = require('./Employee')

class EmployeeManager extends Employee {
  constructor() {
    super();

    // JS doesn't allow private constructor, so I use a workaround to make this class singleton
    if (EmployeeManager.instance) {
      throw new Error('A instance of EmployeeManager is existing. Use EmployeeManager.getInstance() instead of new.');
    }
    EmployeeManager.instance = this; // Assign the instance to the static property
    this.employeeFactory = new EmployeeFactory();

    this.all_employees = []
    this.default_hourly_rate = 30
    this.max_id = 0
  }

  static getInstance() {
    if (!EmployeeManager.instance) {
      EmployeeManager.instance = new EmployeeManager();
    }
    return EmployeeManager.instance;
  }

  getAllEmployees() {
    return this.all_employees
  }

  addNewEmployee(name, position, hourly_rate = this.default_hourly_rate, type, hours_per_week) {
    const new_employee_id = this.max_id
    const new_employee = this.employeeFactory.createEmployee(new_employee_id, name, position, hourly_rate, type, hours_per_week)
    this.all_employees.push(new_employee)
    this.max_id += 1
    return new_employee
  }

  updateEmployeeDetails(id, name, position, hourly_rate) {
    // find employee by id
    const employee = this.all_employees.find(emp => emp.id === id);
    if (!employee) {
      console.error(`Employee with ID ${id} not found.`);
      return;
    }

    if (name) employee.updateName(name);
    if (position) employee.updatePosition(position);
    if (hourly_rate) employee.updateRate(hourly_rate);
  }

  displayAllEmployees() {
    console.log(`Displaying all employees`)
    for (let employee of this.all_employees) {
      employee.displayDetails()
    }  
  }
}

module.exports = EmployeeManager
