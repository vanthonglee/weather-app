// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
export const mapKeys = (obj, mapper) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [mapper(value, key)]: value,
    }),
    {},
  )
