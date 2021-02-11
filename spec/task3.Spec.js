describe('reverse number', () => {
    it('should be defined', () => {
        expect(reverseNum).toBeDefined()
    })
});


it('should return reversed num', () => {
    expect(reverseNum(987654321)).toEqual(123456789)
});
