const ValidationParams = require('../helpers/ValidationParams');
const CryptPassword = require('../helpers/CryptPassword');

class User{

    constructor(){
        this.id;
        this.email;
        this.password;
        this.deleted = false;
        this.create_at = new Date();
        this.update_at = null;
    }

    setID(id){
        return new Promise(async (resolve, reject) =>{
            try {
                if(Number.isInteger(id)){
                    this.id = id;
                    resolve(true);
                } else {
                    throw new Error('ID inválido')
                }
            } catch (error) {
                console.error('Erro ao adicionar email ao objeto User', error);
                reject('Erro ao adicionar email ao objeto User ' + error);
            }
        })
    }

    setEmail(email){
        return new Promise(async (resolve, reject) =>{
            try {
                await ValidationParams.validatesEmail(email);
                this.email = email;
                resolve(true);
            } catch (error) {
                console.error('Erro ao adicionar email ao objeto User', error);
                reject('Erro ao adicionar email ao objeto User ' + error);
            }
        })
    }

    setPassword(pass){
        return new Promise(async (resolve, reject) =>{
            try {
                await ValidationParams.validatesLengthParams(5, {ignore_whitespace: true}, pass);
                const hash = await CryptPassword.encryptPassword(pass);
                this.password = hash;
                resolve(true);
            } catch (error) {
                console.error('Erro ao adicionar senha ao objeto User', error);
                reject('Erro ao adicionar senha ao objeto User ' + error);
            }
        })
    }
}

module.exports = User;