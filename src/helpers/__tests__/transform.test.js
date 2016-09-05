import transform from '../transform';

test('returns an svg transform', () => {
    const svgTransform = transform(50, 0, 100);

    expect(svgTransform).toBe('rotate(0, 304.5, 312.5)');
});
