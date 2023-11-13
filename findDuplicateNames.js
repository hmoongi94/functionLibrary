function findDuplicateNames(array) {
  let duplicateIndexes = [];

  for (let i = 0; i < array.length; i++) {
    // 현재 요소를 제외한 배열에서 같은 값의 모든 인덱스를 찾음
    let indexes = nameArray.reduce(
      //reduce의 accumulator를 이용해서 같은 값을 가지는 경우 ...acc로 같은 값인 
      (acc, element, index) => (element === array[i] ? [...acc, index] : acc),
      []
    );
    console.log(indexes)

    // 중복된 값이 있다면 현재 인덱스와 찾은 인덱스를 기록
    if (indexes.length > 1) {
      duplicateIndexes.push({ index: i, duplicates: indexes });
    }
  }

  return duplicateIndexes;
}
