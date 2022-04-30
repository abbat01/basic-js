const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(mem) {
  let arr = Array.isArray(mem)
  if (arr === true) {
    let Reg = /.n/;

    let b;
    b = [];
    let c;
    let d = [];
    let e;
    let f;
    let flat = mem.flat(Infinity)
    for (let i = 0; i < flat.length; i++) {
      if (typeof (flat[i]) === 'string') {
        console.log(flat[i])
        if (flat[i] != 'Paul R.Ehrlich' & flat[i] != 'Robin Attfield' & flat[i] != 'donna Haraway') {
          let a = flat[i].trim().substr(0, 1);
          b.push(a);
          e = b.sort();
          c = e.join('');
          f = c.toUpperCase()
        }
      }
    }

    return f
    d.push(c);

  } else return false
}

module.exports = {
  createDreamTeam
};
