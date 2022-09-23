# Logger
 Simple logger with time stamp in UTC
 
 ## How to use
 ```javascript
 const logger = require('njedhir-logger')

const moduleName = 'TCPServer'
const functionName = 'onSocketError'
const eventName = 'Socket Error'
const msg = 'Your log message here'
const msg2 = 'Another log message'

// You can set logger verbosity (Default: true)
logger.setVerbose(false) // Logger won't output anything

// You can set logger delimiter
// Logger won't put delimiter after log message
logger.setDelimiter(false)

// Logger will put delimiter with string of the second param
// If you omit second param, the default value is '____\n'
logger.setDelimiter(true, '----')

// log msg with logger
// if isError is true, then logger will put red color on the time stamp
logger.write(moduleName, functionName, eventName, isError, msg1, msg2)
```

The result of above code will be like the following:
```log
2022-09-23T11:26:39Z
TCP Server > onSocketError > Socket Error
Your log message here
Another log message
----
```
