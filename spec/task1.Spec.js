describe('findNum function', () => {
    it('should be defined', () => {
        expect(findNum).toBeDefined()
    })
});

it('should be > 1000', () => {
    expect(findNum()).toBeGreaterThan(1000);
});

it('should be 9240', () => {
    expect(findNum()).toEqual(9240);
});
