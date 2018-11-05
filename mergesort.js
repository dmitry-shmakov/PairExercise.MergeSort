function split(wholeArray) {
    /* your code here to define the firstHalf and secondHalf arrays */
    let midPoint = Math.floor(wholeArray.length/2);
    let firstHalf = wholeArray.slice(0,midPoint);
    let secondHalf = wholeArray.slice(midPoint)
    return [firstHalf, secondHalf];
  }

  function merge(array){
    let firstNum = array[0][0];
    let secondNum = array [1][0];
    let resultArr = [];

    while(0 < array[0].length || 0 < array[1].length){
    if(firstNum < secondNum){
      resultArr.push(firstNum);
      array[0].shift();
      firstNum = array[0][0]
    }
    else{
      resultArr.push(secondNum);
      array[1].shift();
      secondNum = array[1][0]
    }
  }
    return resultArr;
  }

  function mergeSort(array) {
    let trigger = true;
    let split1 = [];
    let split2 = [];
    let splitArr = split(array);

    while (splitArr[0].length > 1 && splitArr[1].length >= 1){

      if(splitArr[1] > 1){
        split2 =mergeSort(splitArr[1]);
      }
      else{      
        split2 = splitArr[1];
      }
      split1 = mergeSort(splitArr[0]);
 
    }
    return split1.concat(split2);
    
  
  }