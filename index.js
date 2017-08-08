let array = [1,2,3,4,5]

// NOTE: O(1)
firstEle = (array)=>{
  console.log(array[0]);
}

// NOTE: O(n)
allEle = (array)=>{
  for(let i = 0; i < array.length; i ++){
    console.log(array[i]);
  }
}

// NOTE: O(n^2)
evenMoreEle = (array)=>{
  for(let i = 0; i < array.length; i ++){
    for(let j = 0; j < array.length; i ++){
      console.log(array[j])
    }
  }
}
