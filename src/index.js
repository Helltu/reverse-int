module.exports = function reverse(number){
    number=Math.abs(number);
    res='';
    while(number>0){
        res+=number%10;
        number=Math.floor(number/10);
    }
    return res/1;
}