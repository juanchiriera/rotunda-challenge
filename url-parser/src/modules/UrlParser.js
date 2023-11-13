import _ from 'lodash';

/**
 * Parses a URL format string and an instance to extract variable parts and their values.
 * @param {string} urlFormat - The URL format string.
 * @param {string} urlInstance - The URL instance.
 * @returns {Object} - A hash mapping variable parts to their values.
 */
export function parseUrl(urlFormat, urlInstance) {
    const formatParts = urlFormat.split('/');
    const instanceParts = urlInstance.split('/');
    const lastInstancePart = _.last(instanceParts);
    const queryParams = lastInstancePart.includes('?') ? parseQueryParams(lastInstancePart.split('?')[1]) : {};

    // Iterate over the obtained 'formatParts' and build response
    return formatParts.reduce((result, part, index) => {
        // Add all mapped parameters
        if (_.startsWith(part, ':')) {
            const paramName = _.trimStart(part, ':');
            // Split on ? to obtain the curated latest parameter, then parse numeric values
            result[paramName] = parseValue(instanceParts[index].split('?')[0]);
        }
        return result;
    }, queryParams);
}

/**
 * Parses query parameters from a string.
 * @param {string} queryString - The query string.
 * @returns {Object} - A hash representing query parameters.
 */
function parseQueryParams(queryString) {
    // Using chain to make multiple operations readable
    return _.chain(queryString)
        // Split into key, value pairs
        .split('&')
        // Group key and value pairs splitting them by '='
        .map(_.partial(_.split, _, '=', 2))
        // Map key and values
        .fromPairs()
        // Parse each value
        .mapValues(parseValue)
        // Return final result
        .value();
}

/**
 * Parses a value, attempting to convert it to a number.
 * @param {string} value - The value to parse.
 * @returns {number|string} - The parsed value.
 */
function parseValue(value) {
    const parsedValue = parseFloat(value);
    return _.isNaN(parsedValue) ? value : parsedValue;
}
