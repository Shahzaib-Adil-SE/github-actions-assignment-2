
const fs = require('fs');

const name = process.env.INPUT_NAME || 'Student';
const actor = process.env.GITHUB_ACTOR || 'Unknown';

const greeting = `Hello, ${name}! Welcome to Module 7.`;

console.log(greeting);
console.log(`Triggered by GitHub user: ${actor}`);
console.log('Custom JavaScript Action executed successfully!');

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    `greeting=${greeting}\n`
  );
}
