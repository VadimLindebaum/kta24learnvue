function write(text) {
    process.stdout.write(text);
}

const ESC = '\x1B';

write(ESC + '[31m');
write('Hello Terminal\n');
write(ESC + '[0m');
write('Hello Terminal\n');
write(ESC + '[30m');
write('Hello Terminal\n');
write(ESC + '[31m');
write('Hello Terminal\n');
write(ESC + '[32m');
write('Hello Terminal\n');
write(ESC + '[33m');
write('Hello Terminal\n');
write(ESC + '[34m');
write('Hello Terminal\n');
write(ESC + '[35m');
write('Hello Terminal\n');
write(ESC + '[36m');
write('Hello Terminal\n');
write(ESC + '[37m');
write('Hello Terminal\n');

write(ESC + '[40m');
write('Hello Terminal' + ESC + '[0m' + '\n');
write(ESC + '[41m');
write('Hello Terminal' + ESC + '[0m' + '\n');
write(ESC + '[42m');
write('Hello Terminal' + ESC + '[0m' + '\n');
write(ESC + '[43m');
write('Hello Terminal' + ESC + '[0m' + '\n');
write(ESC + '[44m');
write('Hello Terminal' + ESC + '[0m' + '\n');
write(ESC + '[45m');
write('Hello Terminal' + ESC + '[0m' + '\n');
write(ESC + '[46m');
write('Hello Terminal' + ESC + '[0m' + '\n');
write(ESC + '[47m');
write('Hello Terminal' + ESC + '[0m' + '\n');