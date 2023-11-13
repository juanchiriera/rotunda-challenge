# Error Alarm Handler

## Table of Contents
- [Error Alarm Handler](#error-alarm-handler)
  - [Table of Contents](#table-of-contents)
  - [Exercise description](#exercise-description)
    - [Error Alarm Exercise](#error-alarm-exercise)
  - [Strategy](#strategy)
  - [Resolution](#resolution)
## Exercise description

### Error Alarm Exercise
Suppose we have a web application that runs on a single server. Errors that
occur from time to time during normal operation of the application are logged to a
text file that is stored in the file system on the server.

We are not concerned about these errors when their frequency is low. However,
when lots of errors occur in a short period of time, there may be a problem with
the application and we want to be notified immediately. Specifically, when more
than ten errors occur in one minute, we want to receive an email notification.

In general terms or pseudo code, how would you implement such an alarm?
Please assume:
1. The general paradigm of logging errors to a text file will be kept in place.
2. There exists a function
        
    ```javascript
    function logError( error )
    ```
    
    This function is called each time there is an error and appends the error to the end of the log file.
3. We never want to receive more than one email notification per minute.

## Strategy

For this scenario, we will make use of a queue structure. 
We will store on the queue the timestamp of the latest errors and limit it's size to the maximum error count within the time allowed. We will assume the topic of the error is not important, and will accumulate every error regardless of the topic or code. 

The queue will be updated every time an error occurs, deleting all of the timestamps which does not correspond to the last minute.

It will also be necessary to keep track of the last email sent in order to avoid sending more than one email during the minute window.

## Resolution

Implementing this in pseudo-code would be:

```javascript
const WINDOW_SIZE_MILISECONDS = 60000; // 1 minute in miliseconds
const ALLOWED_ERRORS_THRESHOLD = 10; // Number of errors triggering the notification

// Implementation of a Queue, implements the following operations:
// enqueue: add an element to the end of the queue.
// dequeue: remove the first element of the queue.
// first: obtain the value of the first element of the queue.
// clear: remove all elements from the queue. 
var errorQueue = new Queue();
var lastEmailTimestamp = 0;

// Function to be called whenever an error occurs
function handleNewError(error) {
  // Log the error
  logError(error);
  // Increment the error count
  errorCount++;
  // Get the current timestamp in milliseconds
  const currentTime = Date.now();
  // Discard errors older than a minute
  while(currentTime - errorQueue.first().time > WINDOW_SIZE_MILISECONDS){
    errorQueue.dequeue();
    errorCount--;
  }
  // Add the latest error to the queue
  erroeQueue.enqueue(error);

  // Send the notification and clear the queue in case there are more than 10 errors and more than a minute has passed.
  if(errorCount>=ALLOWED_ERRORS_THRESHOLD 
    && currentTime - lastEmailTimestamp > WINDOW_SIZE_MILISECONDS){
    sendEmailNotification();
    lastEmailTimestamp = currentTime;
    errorQueue.clear();
  }
}
```