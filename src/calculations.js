
const randInt = (mn,mx) => {
  return Math.floor(Math.random()*(mx-mn+1)+mn);
}

const randFloat = (mn,mx) => {
  return (Math.random()*(mx-mn)+mn);
}

const randRounded = (mn,mx,roundTo) => {
  return Math.round(randFloat(mn,mx) * roundTo) / roundTo
}

const randInv = (mn,mx,intv) => {
  return Math.round(randFloat(mn,mx) * intv) / intv
}

export {
  randInt,
  randFloat,
  randRounded,
  randInv,
}
