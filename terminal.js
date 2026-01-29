function write(text) {
    process.stdout.write(text);
}

const ESC = '\x1B';

let time = new Date().toTimeString().substring(0,8);

write(time);

setInterval(() => {
    write(ESC+ '[8D');
    time = new Date().toTimeString().substring(0,8);
    write(time);
},100);