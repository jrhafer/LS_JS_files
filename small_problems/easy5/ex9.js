let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurrences(vehicles) {
  let resultObj = {};

  for (let i = 0; i < vehicles.length; i++) {
    let key = vehicles[i];
    if (resultObj[key]) {
      resultObj[key] += 1;
    } else {
      resultObj[key] = 1;
    }
  }

  return Object.keys(resultObj).forEach(key => {
    console.log(`${key} => ${resultObj[key]}`);
  });
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2