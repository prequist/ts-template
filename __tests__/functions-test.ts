import {methods} from '../src';

/**
 * Test the bitshift function.
 */
test('bitshift', () => {
	const {bitshift} = methods;
	const output = bitshift(2, 6);
	expect(output).toBe(128);
});

/**
 * Test the hex function.
 */
test('hex', () => {
	const {hex} = methods;

	expect(hex(10)).toBe('0xa');
	expect(hex(50)).toBe('0x32');
});

/**
 * Test the decimal function.
 */
test('dec', () => {
	const {dec} = methods;

	expect(dec('0xa')).toBe(10);
	expect(dec('0x32')).toBe(50);
});
