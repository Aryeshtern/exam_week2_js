

function Mission1(arr) {
    return arr.filter(num => num % 2 === 0);
}

//console.log(Mission1([1, 2, 3, 4, 5, 6, 7]));
function Mission2(str){
    let words = str.replace(/\t|\n|\r|:|\s/g,'').split(' ');
    let count = 0;
    for(let i=0; i<words.length; i++){
        if(words[i].length === 4){
            count++;
        }
    }
    return count;

}

//console.log(Mission2('this is my string with 4 words that are 4 letters long'));

function Mission3(arr){
    let newArr = [];
    arr.forEach(subArr => {
        newArr.push(...subArr);
    });
    return newArr;
}

//console.log(Mission3([[1, 2], [3, 4], [5, 6]]));

function Mission5(arr1, arr2){
    const newObject = {};
    for(let i=0; i < arr1.length && i < arr2.length; i++){
        newObject[arr1[i]] = arr2[i];
    }
    return newObject;
}

console.log(Mission5(['a', 'b', 'c'], [1, 2, 3, 4]));

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission5,
 };
