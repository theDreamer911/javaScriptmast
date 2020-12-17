const vowels = ["a", "i", "u", "e", "o"];

function vowelCount(text) {
  let counter = 0;
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    } else {
      counter += 2;
    }
  }
  console.log(`The text is contain ${counter} vowels`);
  return counter;
}

vowelCount("Hell yeah why so fail");
