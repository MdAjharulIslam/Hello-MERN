
// clouser example 
function home (){
    let snack = "this is snack"

    function gotoschool (){
        console.log(snack)
    }
    return gotoschool();
}

let kid = home()
kid

// clousers example 2 

function  me (){  //outer function
    let name = 'ajharul islam'  //lexical scope

    function you (){    //inner function
        console.log(name)  
    }
    return you ()  // outer function return a function that is inner function
}

let store = me()  // store outer function in a varable is called store
store    //call the store
