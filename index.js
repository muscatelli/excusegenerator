let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function completed  ()  {
    let lie1 = who [Math.floor(Math.random()*who.length)];
    let lie2 = what [Math.floor(Math.random()*who.length)];
    let lie3 = when [Math.floor(Math.random()*who.length)]
    return  lie1 +''+lie2+''+lie3;
    
}
console.log(completed());


/*
console.log(excuse,excuse2,excuse3);
*/

/*
function completed () {
    let lie1 = who [Math.floor(Math.random()*who.length)];
    let lie2 = what [Math.floor(Math.random()*who.length)];
    let lie3 = when [Math.floor(Math.random()*who.length)]
    return  lie1 +''+lie2+''+lie3;
    console.log(completed());
    
}*/

