import { parseUrl } from './modules/UrlParser.js'
import readlineSync from 'readline-sync'

console.log(
  'Welcome to the URL Parser!\n' +
  'The application will extract the URL parameters ' +
  'from a defined URL and a defined model.\n' +
  'A brief example is shown below:\n'
)

// Example usage
let urlFormat = '/:version/api/:collection/:id'
let urlInstance = '/6/api/listings/3?sort=desc&limit=10'

try {
  const result = parseUrl(urlFormat, urlInstance)
  console.log('Example URL format: ' + urlFormat)
  console.log('Example URL instance: ' + urlInstance)
  console.log(result)
} catch (error) {
  console.error('Error parsing URL:', error.message)
}

console.log(
  '\n\nPlease input the URL format and the URL to be parsed below, type \'exit\' to quit:'
)
// Request user input for the url Format, 'exit' will end the program.
while (urlFormat !== 'exit' && urlInstance !== 'exit') {
  urlFormat = readlineSync.question('URL Format: ')
  if (urlFormat !== 'exit') {
    urlInstance = readlineSync.question('URL to be parsed: ')
    try {
      const result = parseUrl(urlFormat, urlInstance)
      console.log(result)
    } catch (error) {
      console.error('Error parsing URL:', error.message)
    }
  }
}

// Log a greetings message and exit.
console.log('Greetings!')
