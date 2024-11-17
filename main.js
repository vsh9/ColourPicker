function createColour(){
    var hexcodes=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var hex=['#'];
    for(let i=0;i<6;i++){
       var num=Math.floor(Math.random()*11)
       hex+=hexcodes[num]
    }
    let hexcode =hex.toString();
    return hexcode
}

function randomize(){
    let codes=[]
    let FirstDiv=document.getElementById('one');
    let SecondDiv=document.getElementById('two');
    let ThirdDiv=document.getElementById('three');
    let FourthDiv=document.getElementById('four');
    let FifthDiv=document.getElementById('five');
    let divs=[FirstDiv,SecondDiv,ThirdDiv,FourthDiv,FifthDiv]

    for(let j=0;j<5;j++)
    {
        let hexcode=createColour();
        codes.push(hexcode);
        document.getElementById(`${divs[j].id}`).style.backgroundColor=codes[j];
        document.getElementById(`${divs[j].id.charAt(0).toUpperCase()}${divs[j].id.slice(1)}Head`).textContent = `${codes[j]}`;
    }
}