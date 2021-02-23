const readline = require('readline')
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function main() {
    const name = await askQuestion(readlineInterface, 'What is your name? ')
    console.log(`Hello ${name}`)
    readlineInterface.close()
}

main()

function askQuestion(readlineInterface, question) {
    return new Promise(resolve => {
        readlineInterface.question(question,answer => {
            resolve(answer)
        })
    })
}