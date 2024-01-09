// The return statement is used when you want the function to return some information
// So, for example, getting the code from the last classes

let account_balance = 40

function check_balance(itemPrice){
    if (account_balance - itemPrice > 0) {
        return true // If the person doesn't have money, the program will either true or false
    } else {
        return false
    }
}

function eat_burguer(){
    if (check_balance(5)) {
        account_balance -= 5
    } else {
        console.log('You do not have funds!')
    }
}
function drink_beer(){
    if (check_balance(4)) {
        account_balance -= 4
    } else {
        console.log('You do not have funds!')
    }
}
function show_account_balance(){
    console.log(account_balance)
}

let menuListRock = [eat_burguer, drink_beer, drink_beer, drink_beer]

function visitCarnival(mList) {
    for(let i=0; i<(mList.length); i++){
        mList[i].call()
    }
}

visitCarnival(menuListRock)
visitCarnival(menuListRock)
visitCarnival(menuListRock)
show_account_balance()
