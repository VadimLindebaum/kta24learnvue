function write(text) {
    process.stdout.write(text);
}
import { input, select } from "@inquirer/prompts";
let answer = await input({ message: 'Enter your name' });
console.log(answer);
answer = await select({ message: 'Choose a class', choices: ['Wizard', 'Knight', 'Rogue'] });