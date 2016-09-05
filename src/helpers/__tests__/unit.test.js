import parseNumber from '../unit';

test('returns a currency formatted string', () => {
    const transformed = parseNumber(100, 'GBP');

    expect(transformed).toBe('£100');
});

test('returns a formatted string', () => {
    const transformed = parseNumber(100);

    expect(transformed).toBe('100');
});
