function generate(){
    const Arr=["Paper","Scissors","Rock"]
    const index=Math.floor(Math.random()*3);
    console.log(index);
    return Arr[index];
}
let player1win=0;
let player2win=0;
const fun=()=>{
    const player1=generate();
    const player2=generate();

    const show1=document.getElementById('option1');
    show1.innerHTML=`${player1}`;

    const show2=document.getElementById('option2')
    show2.innerHTML=`${player2}`;
    const p1win=document.getElementById("p1win");
    const p2win=document.getElementById("p2win");
    if(player1===player2){
        document.getElementById('result').innerHTML="Match Draw"
        return;
    }
    else if(player1==="Rock"&&player2==="Paper"){
        document.getElementById('result').innerHTML="Player 2 Win"
        player2win+=1;
        p2win.innerHTML=`Win ${player2win}`
        p1win.innerHTML=`Win ${player1win}`
        return;
    }
    else if(player1==="Rock"&&player2==="Scissors"){
        document.getElementById('result').innerHTML="Player 1 Win"
        player1win+=1;
        p2win.innerHTML=`Win ${player2win}`
        p1win.innerHTML=`Win ${player1win}`
        return;
    }
    else if(player1==="Paper"&&player2==="Rock"){
        document.getElementById('result').innerHTML="Player 1 Win"
        player1win+=1;
        p2win.innerHTML=`Win ${player2win}`
        p1win.innerHTML=`Win ${player1win}`
        return;
    }
    else if(player1==="Scissors"&&player2==="Rock"){
        document.getElementById('result').innerHTML="Player 2 Win"
        player2win+=1;
        p2win.innerHTML=`Win ${player2win}`
        p1win.innerHTML=`Win ${player1win}`
        return;
    }
    else if(player1==="Scissors"&&player2==="Paper"){
        document.getElementById('result').innerHTML="Player 1 Win"
        player1win+=1;
        p2win.innerHTML=`Win ${player2win}`
        p1win.innerHTML=`Win ${player1win}`
        return;
    }
    else{
        document.getElementById('result').innerHTML="Player 2 Win"
        player2win+=1;
        p2win.innerHTML=`Win ${player2win}`
        p1win.innerHTML=`Win ${player1win}`
        return;
    }
    button.removeEventListener();
}

const button=document.querySelector("button");
button.addEventListener('click',fun);

const restart=document.getElementById('restart');
restart.addEventListener('click',()=>{
    let player1win=0;
    let player2win=0;
    p2win.innerHTML=`Win 0`;
    p1win.innerHTML=`Win 0`;
    const show1=document.getElementById('option1');
    show1.innerHTML=``;

    const show2=document.getElementById('option2')
    show2.innerHTML=``;
    
    document.getElementById('result').innerHTML="";
})

