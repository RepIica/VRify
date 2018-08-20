
const randInt = (mn,mx) => {
  return Math.floor(Math.random()*(mx-mn+1)+mn);
}

const randFloat = (mn,mx) => {
  return (Math.random()*(mx-mn)+mn);
}

const randRounded = (mn,mx,roundTo) => { // rand num rounded to number of decimal points, e.g. 1000 for thousanth decimal
  return Math.round(randFloat(mn,mx) * roundTo) / roundTo
}

const randInv = (mn,mx,intv) => { // returns random num with intervals as small as 0.001
  const x = randFloat(mn,mx)
  if(intv%1 === 0){
    return Math.round(x+intv - x%intv)
  }else{
    return Math.round((x+intv - x%intv) * 1000) / 1000 // rounds to thousanth decimal point

  }
}

export {
  randInt,
  randFloat,
  randRounded,
  randInv,
}
