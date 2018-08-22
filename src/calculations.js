import tinycolor from 'tinycolor2'

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
const textValidator = (text) => {
  if (text) {
    if(text ==="") {
      alert('Inavlid text, please try again.');
      return null
    }
    else{
      return text
    }
  }else{
    alert('No project name entered, please try again.');
    return null
  }
}

const randHexColor = () => {
  let c = '';
  while (c.length < 6) {
    c += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  return '#'+c;
}

const randBrightColor = () => {
  console.log('randBrightColor');
  const c = tinycolor(randHexColor())
  return c.isLight() ? c.saturate(90) : randBrightColor()
}
const randGrayColor = () => {
  console.log('randGrayColor');
  const c = tinycolor(randHexColor())
  return c.isDark() ? c.desaturate(70) : randGrayColor()
}


export {
  randInt,
  randFloat,
  randRounded,
  randInv,
  textValidator,
  randHexColor,
  randBrightColor,
  randGrayColor,
}
