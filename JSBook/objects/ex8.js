let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keys) {
  let resultObj = {};

  if (keys) {
    keys.forEach(key => resultObj[key] = obj[key]);
  } else {
    for (key in objToCopy) {
      resultObj[key] = objToCopy[key];
    }
  }

  return resultObj;
 }

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }