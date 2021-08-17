import {find} from '../src/lib';
import {methods} from '../src';

const {bitshift} = methods;

/**
 * Test the inference function.
 */
test('inference', () => {
	const inferred = find('1 << 2 << 3', '<<', n => Number(n));
	expect(inferred).toStrictEqual([1, 2, 3]);
});

/**
 * Test the application of the inference function.
 */
test('application', () => {
	const inferred = find('1 << 2 << 3', '<<', n => Number(n));
	if (inferred !== null) {
		const value = bitshift(...inferred);
		expect(value).toBe(32);
		return;
	}
	// If this failed, throw an error.
	throw new Error('inferred was null');
});
