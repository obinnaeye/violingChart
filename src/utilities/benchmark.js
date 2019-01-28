class Timer {
  constructor(title) {
    this.title = title
    this.startTime = new Date()
    this.stepTime = this.startTime
  }

  step(label) {
    const newStepTime = new Date()
    this.print(label, this.stepTime, newStepTime)
    this.stepTime = newStepTime
  }

  stop() {
    this.endTime = new Date()
    this.print('total', this.startTime, this.endTime)
  }

  print(label, startTime, endTime) {
    const diffTime = endTime.getTime() - startTime.getTime()
    console.log(`Timer: ${this.title} - ${label} finished in ${diffTime} ms`)
  }
}

export default Timer



// WEBPACK FOOTER //
// ./src/utilities/benchmark.js