const arr = [1,2,3,-1,-2,-3];

function getArray(arr){
    const positiveArr = [];

    if(arr.length === 0) return console.log(`Array is empty!`);

    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] > 0) positiveArr.push(arr[i]);
    }

    return positiveArr.length === 0 ? null : positiveArr;

}

console.log(getArray(arr));

//function isValidNumber(arg){
//    if (arg !== "number" && isNaN(arg));
//}