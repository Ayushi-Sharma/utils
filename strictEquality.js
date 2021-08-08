function strictEquals(a, b) {
  const arr = [0,NaN, -0];
  if((arr.includes(a) || arr.includes(a)) && Object.is(a,b)) {
      return  !Object.is(a, b)
  }
  return  Object.is(a, b)
}
