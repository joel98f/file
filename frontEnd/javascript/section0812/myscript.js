// myscript.js

function hap(a,b){  //두수 사이의 합을 반환하시오
    //2+3+4+5
    //5+4+3+2
    let num=0;
    // for(let i = a; i<=5; i++){
    
    //     num = i+num; 
    // }
    //return num;
    if(a>b){// 숫자가 클 시 자리 바꿈
        let tmp = a ; a=b; b=tmp;
    }
    let sum=0;
    for(let n=a; n<=b; n++){
        sum+=n;
    }
    return sum;
}


function diff(a,b){ // 두수사이의 차이를 반환하시오 (절대값)
    return Math.abs(a-b); //무조건 -삭제
    
    
    //2,5 //3
    //5,2 //3
}

function leap(year){ //윤년 평년을 반환하시오
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }
}