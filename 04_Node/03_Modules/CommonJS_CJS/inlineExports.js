console.log("Hiiiii");
function div(a,b){
    console.log(a/b);

}
exports.add = function(a,b){
    console.log(a+b);

}

exports.greetings = function(){
    console.log("hello from inline")
}
function hey(){
    console.log("Helloooooooooooooooo");
}

//always use module.exports over inline exports
module.exports={div, hey}


//Error issue
//BTS

// module = {
//     exports:{
//      greetings=this.greetings,
//      add=add

//     }
// }