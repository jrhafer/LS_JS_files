// p
// - given a number, print first line with n - 1 spaces 
//   and an asterick
//   - on the next line print n - 2 spaces then asterick
//   - on next line print n - 3 spaces then asterick
//   - on next line print n - 4 spaces ......
//   - until whole line is astericks


function triangle(num) {
  for (let count = 1; count <= num; count++) {
    let spaces = ' '.repeat(num - count);
    let astericks = '*'.repeat(count);
    console.log(spaces + astericks);
  }
}



triangle(5);

//     * (n -1 spaces and 1 asterick)
//    ** (n -2 spaces and 2 asterick)
//   *** (n -3 spaces and 3 asterick)
//  **** (n -4 spaces and 4 asterick)
// ***** 

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********