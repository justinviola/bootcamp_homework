function addArrays(...arrays) {
    let newArray = [];
    for(let i = 0; i < arrays.length; i++) {
        newArray.push(...arrays[i]);
    }
    return newArray;
}

console.log(addArrays([1,2,3],[4,5,6],[7,8,9]))