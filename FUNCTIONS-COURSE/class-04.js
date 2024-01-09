// What are default parameters

function sendMessage(email, description, title="") { // That's what a default parameter is, if nothing is provided it'll be used
    if (!email || !description) {
        return console.log('You must insert an email and a description.')
    }
    console.log(`Email sent to -> ${email} `)
    console.log(title)
    console.log(description)
}
sendMessage(
    'roger_simon@mail.com',
    'Hey mate!',
    "Let's play golf"
)
sendMessage(
    'math_ellen@mail.com',
    "Let's take a walk.'"
)