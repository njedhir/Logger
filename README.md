# Logger
 Simple logger with time stamp in UTC
 
 ## How to use
 ```javascript
 const logger = require('logger')
 
const msg = 'Your log message here'
const msg2 = 'Another log message'

// log msg with logger
logger([msg])

// you can add more message
logger([msg, msg2])

// to log an error use:
logger([msg, msg2], true)
```

The result of above code will be like the following:
```log
2022-01-19T06:07:08Z :
Your log message here
----

2022-01-19T06:07:09Z :
Your log message here
Another log message
----
```
