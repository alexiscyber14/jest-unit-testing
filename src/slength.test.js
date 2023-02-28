function stringLength(string) {
  const length = string.length;
  if (length === 0) {
    throw new RangeError('String must be at least 1 character long');
  }
  if (length > 10) {
    throw new RangeError('String must not be longer than 10 characters');
  }
  return length;
}


describe('stringLength', () => {
  test('returns the number of characters in a string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('world')).toBe(5);
    expect(stringLength('')).toBe(0);
  });

  test('throws an error if the string is too short or too long', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long');
    expect(() => stringLength('12345678901')).toThrow('String must not be longer than 10 characters');
  });
});
