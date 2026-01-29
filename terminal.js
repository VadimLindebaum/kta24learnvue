function write(text) {
    process.stdout.write(text);
}

import boxen from 'boxen';
import chalk from 'chalk';
write(boxen(chalk.blue('Hello world!'), {
    padding: 1,
    borderStyle: 'round',
    title: chalk.red.italic('Hello world!')
}));
write('\n');
import ProgressBar from 'progress';

var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 1000);