const bcrypt = require('bcryptjs');
const saltRounds = 10;

class CryptPassword{
    
    encryptPassword(password){
        return new Promise((resolve, reject) =>{
            if(password === ' ' || password.length <= 0){
                reject('Parâmetro inválido')
            } else {
                bcrypt.hash(password, saltRounds, function(err, hash) {
                    if(err){
                        console.error('Erro ao criptografar a senha', err);
                        reject('Erro ao criptografar a senha ' + err);
                    } else {
                        resolve(hash);
                    }
                });
            }
        })
    }

    decryptPassword(password, hash){
        return new Promise((resolve, reject) =>{
            if(password === ' ' || password.length <= 0 || hash === ' ' || hash.length <= 0){
                reject('Parâmetro inválido')
            } else {
                bcrypt.compare(password, hash, function(err, result) {
                    if(err){
                        console.error('Erro ao descripitografar o hash da senha', err);
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        })
    }
}

module.exports = new CryptPassword;