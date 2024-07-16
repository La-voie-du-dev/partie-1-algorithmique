let count = -1;
// while (expression) { ... }
while (true) {
  count++;

  if (count >= 10) {
    break;
  }

  console.log(count);

  if (count % 2 === 0) {
    continue;
  }

  console.log("-> est impair");
}
