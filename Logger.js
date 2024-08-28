// This class logs hourly rate updates
class Logger {
  update(employee) {
    console.log(`Logger: (employee id: ${employee.id}) ${employee.name}'s hourly rate has been updated to ${employee.hourly_rate}.`)
  }
}

module.exports = Logger