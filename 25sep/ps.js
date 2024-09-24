let rows=7;
for(let i=1;i<=rows;i++){
    res=""
    space=""
    for(let k=1;k<=2*i-1;k++){
        space+=" "
    }
    for(let j=1;j<=rows-i;j++){
        res+="*"
    }
    console.log(res+space+res)
}