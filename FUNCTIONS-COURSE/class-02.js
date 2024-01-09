// What are parameters? Parameters are passed to a function that will handle that information and do something with it
// So, for example, getting the code from the last class

let account_balance = 1000

function eat_burguer(){
    account_balance -= 5
}
function drink_beer(){
    account_balance -= 4
}
function show_account_balance(){
    console.log(account_balance)
}

let menuListRock = [eat_burguer, drink_beer, drink_beer, drink_beer] // This array is keeping the menu information of a carnival

function visitCarnival(mList) { // mList is the parameter of the function
    for(let i=0; i<(mList.length); i++){
        mList[i].call() // This will call the function that is defined inside the array
        // You can also do like this -> mList[i]()
    }
}

visitCarnival(menuListRock)
visitCarnival(menuListRock)
visitCarnival(menuListRock)
show_account_balance()
