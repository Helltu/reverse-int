function reverse(number){
    res='';
    while(number>0){
        res+=number%10;
        number=Math.floor(number/10);
    }
    return res/1;
}