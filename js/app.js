let result = 0;
let userName = prompt('what is your name');
// console.log('His name '+ name);
alert('Hi ' + userName + ' ,we will play a fuuny game.');

function questions1To5() {
    let qes = ['Is The cheetah the faster animals in the world?', 'Is the elephenet the bigest animals in the world?  ', 'Is the giraffes taller lions than ?', 'Is the lions strong than Deer?', 'can the monkey climb the tree?'];
    let i = 0;
    alert('please answer in y/n or yes/no');
    for (i = 0; i < 5; i++) {
        let ans = prompt(qes[i]);
        let anw = ans.toUpperCase();
        switch (anw) {
            case 'Y':
            case 'YES':
                // console.log(ans.toUpperCase);
                alert('Your answer is correct');
                result++;
                break;
            default:
                alert('Your answer is incorrect');
        }
    }
}


function question6() {
    console.log(result);
    let GusMouth = prompt("Which month I was born");
    for (let y = 0; y < 3; y++) {
        console.log(GusMouth);
        if (GusMouth === '5') {
            console.log('Yes, I was  born in 5');
            alert('Yes,I was  born in 5');
            result++;
            break;
        }
        else if (GusMouth > 5) {
            GusMouth = prompt("Too high Try again,please");
        } else if (GusMouth < 5) {
            GusMouth = prompt("Too low Try again,please");
        }
    }
}

function question7(){
    console.log(result);
    let coler;
    let c = 0;
    coler = prompt('Can you guess my favorite coler is?');
    for (c = 0; c < 5; c++) {
        switch (coler.toUpperCase()) {
            case 'BLUE':
            case 'RED':
            case 'BLACK':
                alert('Yes,my favorite coler is blue, red and black.');
                c = 9;
                result++;
                break;
            default:
                coler = prompt('Try again,please');
        }
    }
    if (c > 3);
    switch (coler.toUpperCase()) {
        case 'BLUE':
        case 'RED':
        case 'BLACK':
            alert('Yes,my favorite coler is blue, red and black.');
            result++;
            break;
        default:
            alert('NO,my favorite coler is blue, red and black.');
    }
}

questions1To5();
question6();
question7();

alert('Your result is ' + result + ' thank you.');
