function write(text) {
    process.stdout.write(text);
}

const ESC = '\x1B';

write(ESC + '[1m');
write('Hello Terminal\n' );
write(ESC + '[0m');
write(ESC + '[2m');
write('Hello Terminal\n' );
write(ESC + '[0m');
write(ESC + '[3m');
write('Hello Terminal\n' );
write(ESC + '[0m');
write(ESC + '[4m');
write('Hello Terminal\n');
write(ESC + '[0m');
write(ESC + '[5m');
write('Hello Terminal\n');
write(ESC + '[0m');
write(ESC + '[7m');
write('Hello Terminal\n');
write(ESC + '[0m');
write(ESC + '[8m');
write('Hello Terminal\n');
write(ESC + '[0m');
write(ESC + '[9m');
write('Hello Terminal\n' );
write(ESC + '[0m');
write(ESC + '[0m');
write('Hello Terminal\n');
setInterval(() => {
    write('\x07');
},1000);
