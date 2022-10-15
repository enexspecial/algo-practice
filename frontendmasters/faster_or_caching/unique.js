/**
 * Your task is to perform a unique sort
 */

const uniqueSort = function(arr){
    const breadCrumbs = {}
    const result = [arr[0]];

    for(let i = 1; i < arr.length; i++){
        if(!breadCrumbs[arr[i]]){
            result.push(arr[i])
            breadCrumbs[arr[i]] = true;
        }

    }

    console.log(result.sort((a,b)=> a - b));
}


uniqueSort([4,2,2,3,2,2,2])