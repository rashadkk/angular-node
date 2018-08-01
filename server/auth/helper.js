const bcrypt = require('bcrypt-nodejs');

module.exports = {
  comparePasswords: (passwordInHand, passwordInDB) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(passwordInHand, passwordInDB, (err, result) => {
        if (err) reject(err);
        if (result) {
          resolve(result)
        }
        reject('Passwords not matching!');
      });
    })
  },
  encryptPassword: (password) => {
    if (!password) throw new Error('password is required');  
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
  }
}