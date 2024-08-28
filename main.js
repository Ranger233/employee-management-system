const EmployeeManager = require('./EmployeeManager')
const Logger = require('./Logger')

// create singleton EmployeeManager and add full-time/part-time employees
const manager = EmployeeManager.getInstance()
const yifei = manager.addNewEmployee('Yifei', 'Software Developer', 50, 'full_time')
const adam = manager.addNewEmployee('Adam', 'Product Manager', 60, 'full_time')
const alex = manager.addNewEmployee('Alex', 'UI Designer', 70, 'part_time', 10)

// print details of all employees
manager.displayAllEmployees()
/* 
Output:
  Displaying all employees

  Employee 0 Detail:
  id: 0
  name: Yifei
  position: Software Developer
  hourly_rate: 50
  pay_strategy: Full Time

  Employee 1 Detail:
  id: 1
  name: Adam
  position: Product Manager
  hourly_rate: 60
  pay_strategy: Full Time

  Employee 2 Detail:
  id: 2
  name: Alex
  position: UI Designer
  hourly_rate: 70
  pay_strategy: Part Time
*/

// calculate pay using different strategies
console.log(`Yifei's pay is: ${yifei.calculatePay()}`) // Yifei and Adam are full-time (40 hr/week), so the pay is 50 * 40 = 2000
console.log(`Adam's pay is: ${adam.calculatePay()}`)   // 60 * 40 = 2400
console.log(`Alex's pay is: ${alex.calculatePay()}`)   // Alex is part-time (10 hr/week), so the pay is 70 * 10 = 700
/*
Output:
  Yifei's pay is: 2000
  Adam's pay is: 2400
  Alex's pay is: 700
*/

// add observer to Adam to monitor his salary update
const logger = new Logger()
adam.addObserver(logger)

// when salary is updated, this log message will appear "Logger: (employee id: 1) Adam's hourly rate has been updated to 44."
manager.updateEmployeeDetails(adam.id, adam.name, adam.position, 44)
