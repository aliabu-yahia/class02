'use strict'
let name=prompt('what is your name');
// console.log('His name '+ name);
alert('Hi '+ name +' ,we will play a fuuny game.');
let qes = ['Is The cheetah the faster animals in the world?','Is the elephenet the bigest animals in the world?  ' ,'Is the giraffes taller lions than ?','Is the lions strong than Deer?','can the monkey climb the tree?'];
let i = 0
alert('please answer in y/n or yes/no')
for (i = 0; i < 4; i++) {
    let ans=prompt(qes[i]);
    let anw = ans.toUpperCase();
    switch(anw){
        case 'Y':
        case 'YES':       
            // console.log(ans.toUpperCase);
            alert ('Your answer is correct')
            break;
        default:
            alert ('Your answer is incorrect') 
    }   
}
