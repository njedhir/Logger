const moment = require('moment')
const clc = require('cli-color')
const log = console.log
let verbose = true
let delimiter = true
let delimiterChar = '____\n'
const timeColor = clc.green.underline
const timeColorError = clc.red.underline
const moduleColor = clc.blue.bold
const functionColor = clc.blue.italic
const eventColor = clc.yellow.italic

const setVerbose = isVerbose => {
  verbose = isVerbose
}

const setDelimiter = (isDelimiter, delimiterString = '____\n') => {
  delimiter = isDelimiter
  delimiterChar = delimiterString
}

const write = (moduleName, functionName, eventName, isError = false, ...msgs) => {
  if (!verbose) return
  const curTime = moment.utc().format()
  isError ? log(timeColorError(curTime)) : log(timeColor(curTime))
  let modLogs = moduleName ? moduleColor(moduleName) : ''
  modLogs += functionName ? ' > ' + functionColor(functionName) : ''
  modLogs += eventName ? ' > ' + eventColor(eventName) : ''
  if (moduleName) log(modLogs)
  msgs.forEach(msg => {
    log(msg)
  })
  if (delimiter && delimiterChar) log(delimiterChar)
}

module.exports = {
  setVerbose,
  setDelimiter,
  write,
}