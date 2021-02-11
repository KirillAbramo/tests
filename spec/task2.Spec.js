describe('includes 3 function', () => {
    it('should be defined', () => {
      expect(includes).toBeDefined()
    });
});

it('should return false', () => {
  expect(includes(2)).toBeFalsy()
});

it('should be true', () => {
  expect(includes(6)).toBe(true);
})