import _ from 'lodash'

/**
 * Parses a URL format string and an instance to extract
 * variable parts and their values.
 * @param {string} urlFormat - The URL format string.
 * @param {string} urlInstance - The URL instance.
 * @return {Object} - A hash mapping variable parts to their values.
 */
export function parseUrl (urlFormat, urlInstance) {
  const formatParts = urlFormat.split('/')
  const instanceParts = urlInstance.split('/')
  const lastInstancePart = _.last(instanceParts)
  const queryParams = lastInstancePart.includes('?')
    ? parseQueryParams(lastInstancePart.split('?')[1])
    : {}

  return buildParsedObject(instanceParts, formatParts, queryParams)
}

/**
 * Builds the response by iterating on each of the path parts
 * and appending them.
 * @param {Object} instanceParts - Array of incoming parts.
 * @param {Object} formatParts - Array of formatted parts.
 * @param {Object} initialValue - Initial object to build the response.
 * @return {Object} - A hash representing query parameters.
 */
function buildParsedObject (instanceParts, formatParts, initialValue) {
  // Iterate over the obtained 'formatParts' and build response
  return formatParts.reduce((result, part, index) => {
    // Add all mapped parameters
    if (_.startsWith(part, ':')) {
      const paramName = _.trimStart(part, ':')
      // Split on ? to obtain the curated latest parameter,
      // then parse numeric values
      result[paramName] = parseValue(instanceParts[index].split('?')[0])
    }
    return result
  }, initialValue)
}

/**
 * Parses query parameters from a string.
 * In order to achieve this, it splits each key-value pair and
 * map them into an object building the response.
 * @param {string} queryString - The query string.
 * @return {Object} - A hash representing query parameters.
 */
function parseQueryParams (queryString) {
  return _.chain(queryString)
    .split('&')
    .map(_.partial(_.split, _, '=', 2))
    .fromPairs()
    .mapValues(parseValue)
    .value()
}

/**
 * Parses a value, attempting to convert it to a number.
 * @param {string} value - The value to parse.
 * @return {number|string} - The parsed value.
 */
function parseValue (value) {
  const parsedValue = parseFloat(value)
  return _.isNaN(parsedValue) ? value : parsedValue
}
