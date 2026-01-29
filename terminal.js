function write(text) {
    process.stdout.write(text);
}

const ESC = '\x1B';

for(let i = 0; i<256; i++) {
    write(ESC + `[48;2;${i};${i};${i}m`);
    write(' ');
}
write(ESC + `[0m`);