class FullTimePayStrategy {
  constructor(hoursPerWeek = 40) {
    this.hoursPerWeek = hoursPerWeek;
    this.name = 'Full Time'
  }

  calculate(hourly_rate) {
    return hourly_rate * this.hoursPerWeek;
  }
}

class PartTimePayStrategy {
  constructor(hoursPerWeek) {
    this.hoursPerWeek = hoursPerWeek;
    this.name = 'Part Time'
  }

  calculate(hourly_rate) {
    return hourly_rate * this.hoursPerWeek;
  }
}

module.exports = {
  FullTimePayStrategy,
  PartTimePayStrategy
}