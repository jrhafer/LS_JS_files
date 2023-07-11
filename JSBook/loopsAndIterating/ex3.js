let counter = 0;

while (counter = 1) {     // this evaluates to truthy everytime
  console.log(counter);   // - it is reassignement so it never increments
  counter += 1;

  if (counter > 2) {
    break;
  }
}