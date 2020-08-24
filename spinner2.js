const string = "\r|\r/\r-\r\\\r|\r/\r-\r\\";
const linebreak = "\n";
const sentence = string + linebreak;
let time = 100;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time += 200);
}