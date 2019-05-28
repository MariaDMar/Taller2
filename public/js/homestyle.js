var mySplitText = new SplitText("#cambiarrrr", {type:"chars, words"}),
    tl = new TimelineLite(),
    numChars = mySplitText.chars.length;

for(var i = 0; i < numChars; i++){
  //random value used as position parameter
  tl.from(mySplitText.chars[i], 2, {opacity:0}, Math.random() * 2);
}
		