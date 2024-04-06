function sumOfNumbersNM(str1, str2) {
str1=Number(str1)
str2=Number(str2)
let result=0
for (let i=str1; i<=str2; i++){
    let num=Number(i)
    result+=num

}

    console.log(result);
}
sumOfNumbersNM('5', `13`);
