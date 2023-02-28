function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });
  