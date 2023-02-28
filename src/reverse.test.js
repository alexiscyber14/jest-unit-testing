function reverseString(string) {
  return string.split('').reverse().join('');
}


describe('reverseString', () => {
  test('reverses the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('12345')).toBe('54321');
  });
});
