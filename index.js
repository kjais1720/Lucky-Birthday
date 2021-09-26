function clickHandler(){
    const output = document.getElementById('output');
    const inputs = document.querySelectorAll('input');
    const [bdate, luckyNum] = [inputs[0].value, inputs[1].value];
    
    if(bdate != '' && luckyNum != ''){
        if(getDigitSum(bdate) % luckyNum === 0){
            output.innerText = `The number ${luckyNum} is lucky for you.🎉`
            // setTimeout(throwConfetti,1000)
        } else {
            output.innerText = `The number ${luckyNum} is not lucky for you 😕`
        }
    }

}

function getDigitSum(dateString){
    const dateNum = dateString.split('-').join(''); //stripping out the dashes
    let sum=0
    for (const n of dateNum){
        sum += Number(n);
    }
    console.log(dateNum);
    return sum;
}


function throwConfetti(){
     
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6, x: 0.5 }
    });

    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6, x: 0 }
    });

    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6, x: 1 }
    });
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}
