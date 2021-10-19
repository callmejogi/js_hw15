const arr = [1,2,3,-1,-2,-3];

function getArray(arr){
    const positiveArr = [];

    if(arr.length === 0){
        return console.log(`Array is empty!`);
    };

    for(i = 0 ; i < arr.length;i++){
        if(arr[i] > 0){
            positiveArr.push(arr[i]);
        }
    };

    if(positiveArr.length === 0){
        return console.log(null);
    }else{
        return console.log(positiveArr);
    };
}

getArray(arr);

//фрагмент задания по желанию 
//let check = function checkArray(arr){
//    if (typeof arr.forEach() !== "number"){
//        return console.log(`Array should consist of numbers only!`);
//    }
//}