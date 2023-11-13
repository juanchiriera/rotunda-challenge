import { describe, it } from 'mocha';
import { assert } from 'chai';
import { parseUrl } from '../src/modules/UrlParser.js';

describe('URL Parser', () => {
    it('should parse a URL with variables and query parameters', () => {
        const urlFormat = '/:version/api/:collection/:id';
        const urlInstance = '/6/api/listings/3?sort=desc&limit=10';
        const expectedResult = {
            version: 6,
            collection: 'listings',
            id: 3,
            sort: 'desc',
            limit: 10,
        };

        const result = parseUrl(urlFormat, urlInstance);

        assert.deepEqual(result, expectedResult);
    });

    it('should handle URL with only variables and no query parameters', () => {
        const urlFormat = '/:category/:id';
        const urlInstance = '/products/42';
        const expectedResult = {
            category: 'products',
            id: 42,
        };

        const result = parseUrl(urlFormat, urlInstance);

        assert.deepEqual(result, expectedResult);
    });

    it('should handle URL with only query parameters and no variables', () => {
        const urlFormat = '/api/data';
        const urlInstance = '/api/data?param1=value1&param2=value2';
        const expectedResult = {
            param1: 'value1',
            param2: 'value2',
        };

        const result = parseUrl(urlFormat, urlInstance);

        assert.deepEqual(result, expectedResult);
    });

    it('should handle URL with both variables and query parameters', () => {
        const urlFormat = '/:category/:id/:action';
        const urlInstance = '/products/42/edit?param1=value1&param2=value2';
        const expectedResult = {
            category: 'products',
            id: 42,
            action: 'edit',
            param1: 'value1',
            param2: 'value2',
        };

        const result = parseUrl(urlFormat, urlInstance);

        assert.deepEqual(result, expectedResult);
    });
});
