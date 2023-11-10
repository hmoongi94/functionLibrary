function createArrayWithoutIndex(originalArray,indexToRemove){
  let newArray = [];

  for(let i=0; i< originalArray.length; i++){
    if(i !==indexToRemove ){
      newArray.push(originalArray[i])
    }
  }
  return newArray
}