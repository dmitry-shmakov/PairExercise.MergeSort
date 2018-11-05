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

    while(array[0].length > 0 || array[1].length > 0){
      array[0].length
      if (array[0].length === 0 && array[1].length !== 0) {
        for (let idx = 0; idx < array[1].length; idx++) {
          resultArr.push(array[1][idx]);
        }
          array[1] = [];
      } else if (array[0].length !== 0 && array[1].length === 0) {
        for (let idx = 0; idx < array[0].length; idx++) {
          resultArr.push(array[0][idx]);
        }
        array[0] = [];
      } else {
        if(firstNum < secondNum){
          resultArr.push(firstNum); 
          array[0].shift();
          firstNum = array[0][0]
        }
        else {
          resultArr.push(secondNum);
          array[1].shift();
          secondNum = array[1][0]
        }
      }
    }
    return resultArr;
  }

  function mergeSort(array) {
    let splitArr = split(array);
    let split1 = splitArr[0];
    let split2 = splitArr[1];

    if (split1.length === 1 && split2.length === 1) {
      // return [split1, split2];
      return merge([split1, split2]);
    }

    if (split1.length === 1 && split2.length > 1) {
      return merge([split1, mergeSort(split2)]);
    }

    split1 = mergeSort(split1);
    split2 = mergeSort(split2);
    return merge([split1, split2]);
  }