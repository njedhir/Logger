const moment = require('moment')
// const util = require('util')
module.exports = (msgs, isError = false) => {
  const writer = isError ? console.error : console.log
  writer(moment.utc().format(), ':')
  msgs.forEach(msg => {
    // writer(util.inspect(msg, false, null, true))
    writer(msg)
  })
  writer('----\n')
}