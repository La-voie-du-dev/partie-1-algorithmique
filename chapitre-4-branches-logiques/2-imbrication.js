let age = 10;

if (age < 3) {
  console.log("bébé");
} else {
  if (age >= 3 && age < 18) {
    console.log("enfant");
  } else {
    if (age >= 18 && age < 60) {
      console.log("adulte");
    } else {
      console.log("senior");
    }
  }
}
