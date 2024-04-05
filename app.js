let inputbox=document.getElementById('inputbox')
let buttons=document.querySelectorAll('button')
// will select all buttons node list

let string='' // whenever we press a button i want to append that string

buttons.forEach(me =>{
    me.addEventListener('click',(b)=>{
       if(b.target.innerText =='='){
         string=String(eval(string))
         inputbox.value=string
       }
       else if(b.target.innerText=='C'){
        string=''
        inputbox.value=string
       }
       else if(b.target.innerText=='Del'){
        string=string.substring(0,string.length-1)
        inputbox.value=string
       }
       else if(b.target.id=='plusminus'){
        string=String(-eval(string))
        inputbox.value=string
       }
       else{
        string+=b.target.innerText
        inputbox.value=string
       }
    })

})
