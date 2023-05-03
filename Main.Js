function maximum(){
    let array = [3,8,5,99,6,24,98,66]
    let max=array[0]
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i]
        }
    }
    console.log(`The largest number in this array is ${max}`)
}
maximum();
console.log(array[3])
console.log(array.index("99"))