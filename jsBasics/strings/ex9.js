let str = 'launch school tech & talk'

let capitalizedStr = str.split(' ')
.map(word => word[0].toUpperCase() + word.slice(1))
.join(' ');

console.log(capitalizedStr);