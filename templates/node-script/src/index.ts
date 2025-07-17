// Load environment variables from .env file
import 'dotenv/config'
// Colors and prompts, yay!
import c from 'kleur'
import prompts from 'prompts'

// BELOW IS AN EXAMPLE, YOU CAN REMOVE IT AND REPLACE IT WITH YOUR OWN CODE

// Welcome message
console.log(c.magenta(c.bold('Say hi to your new node script scaffold!')))

if (!process.env.SOME_VAR) {
  console.log(c.yellow('SOME_VAR is not set. Did you copy .env.example to .env?'))
} else {
  console.log(c.yellow(`SOME_VAR is set to ${process.env.SOME_VAR}`))
}

// Prompt the user for an address
const res = await prompts({ type: 'text', name: 'name', message: 'What is your name?' })

// And we're done!
console.log(c.green(`Hi ${res.name?.length ? res.name : 'there'}! Go build something awesome!`))
