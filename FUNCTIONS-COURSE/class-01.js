// What are functions? Functions are basically used to reuse a certain code, so we don't have to write it again all the time

let account_balance = 1000

// Creating the JavaScript functions below
function eat_burguer(){
    account_balance -= 5
}
function drink_beer(){
    account_balance -= 4
}
function show_account_balance(){
    console.log(account_balance)
}

// Calling the functions
eat_burguer()
show_account_balance()
eat_burguer()
drink_beer()
drink_beer()
show_account_balance()
