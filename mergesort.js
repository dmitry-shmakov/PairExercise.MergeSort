function split(wholeArray) {
    /* your code here to define the firstHalf and secondHalf arrays */
    let midPoint = Math.floor(wholeArray.length/2);
    let firstHalf = wholeArray.slice(0,midPoint+1);
    let secondHalf = wholeArray.slice(midPoint+1)
    return [firstHalf, secondHalf];
  }