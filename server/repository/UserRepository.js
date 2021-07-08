const fs = require('fs');

class UserRepository{

    getDB(){
        return new Promise((resolve, reject) =>{
            const reader = fs.createReadStream('../server/db/db.json');
            reader.on('data', (result) =>{
                var db = JSON.parse(result.toString());
                resolve(db);
            });
            reader.on('error', error =>{
                reject('Erro ao acessar DB ' + error)
            })
        })
    }

    getUserAll(){
        return new Promise(async (resolve, reject) =>{
            try {
                const db = await this.getDB();
                var users = []
                db.find(element => {
                    var i = JSON.parse(element);
                    if(i.deleted == false){
                        users.push(i);
                    }
                })
                resolve(users)
            } catch (error) {
                console.error('erro ao buscar usuarios no DB', error);
                reject('erro ao buscar usuarios no DB ' + error)
            }
        })
    }

    getUserById(id){
        return new Promise(async (resolve, reject) =>{
            try {
                const db = await this.getDB();
                var user = db.find(element =>{
                    var i = JSON.parse(element);
                    if(i.deleted == false){
                        if(i.id == id)
                        return i;
                    }
                })
                if(user == undefined){
                    resolve('Usuário não encontrado')
                } else {
                    user = JSON.parse(user);
                    resolve(user);
                }
            } catch (error) {
                console.error('erro ao buscar usuario por ID no DB', error);
                reject('erro ao buscar usuario por ID no DB ' + error)
            }
        })
    }

    getUserByEmail(email){
        return new Promise(async (resolve, reject) =>{
            try {
                const db = await this.getDB();
                var user = db.users.find(i =>{
                    if(i.deleted == false){
                        if(i.email == email)
                        return i;
                    }
                })
                if(user == undefined){
                    resolve(false)
                } else {
                    user = JSON.parse(user);
                    resolve(user);
                }
            } catch (error) {
                console.error('erro ao buscar usuario por email no DB', error);
                reject('erro ao buscar usuario por email no DB ' + error)
            }
        })
    }

    createUser(user){
        return new Promise(async (resolve, reject) =>{
            try {
                //const obj = JSON.stringify(user);
                var db = await this.getDB();
                var newDB = db.users.push(user);
                var dbteste = JSON.stringify(newDB);
                console.log(dbteste)
                const writer = fs.createWriteStream('../server/db/db.json');
                writer.write(dbteste);
                resolve(true);
            } catch (error) {
                console.error('erro ao cadastrar usuario no DB', error);
                reject('erro ao cadastrar usuario no DB ' + error)
            }
        })
    }

    updateUserById(email, senha, id){
        return new Promise(async (resolve, reject) =>{
            try {
                const db = await this.getDB();
                var update = db.map(i =>{
                    if(i.id == id){
                        i.email = email;
                        i.senha = senha;
                        i.update_at = new Date();
                    }
                    return i;
                });
                const newDB = JSON.stringify(update);
                const writer = fs.createWriteStream('../server/db/db.json');
                writer.write(newDB);
                resolve(true);
            } catch (error) {
                console.error('erro ao editar usuario no DB', error);
                reject('erro ao editar usuario no DB ' + error)
            }
        })
    }

    deleteAllUsers(){
        return new Promise(async (resolve, reject) =>{
            try {
                const db = await this.getDB();
                var update = db.map(i =>{
                    i.deleted = true;
                    i.update_at = new Date();
                    return i;
                })
                const newDB = JSON.stringify(update);
                const writer = fs.createWriteStream('../server/db/db.json');
                writer.write(newDB);
                resolve(true);
            } catch (error) {
                console.error('erro ao excluir usuarios no DB', error);
                reject('erro ao excluir usuarios no DB ' + error)
            }
        })
    }

    deleteUserById(id){
        return new Promise(async (resolve, reject) =>{
            try {
                const db = await this.getDB();
                var update = db.map(i =>{
                    if(i.id == id){
                        i.deleted = true;
                        i.update_at = new Date();
                    }
                    return i;
                });
                const newDB = JSON.stringify(update);
                const writer = fs.createWriteStream('../server/db/db.json');
                writer.write(newDB);
                resolve(true);
            } catch (error) {
                console.error('erro ao excluir usuario no DB por ID', error);
                reject('erro ao excluir usuario no DB por ID ' + error)
            }
        })
    }

    getId(){
        return new Promise((resolve, reject) =>{
            const reader = fs.createReadStream('../server/db/id.json');
            reader.on('data', (result) =>{
                const id = JSON.parse(result.toString());
                const newID = parseInt(id.id) + 1;
                resolve(newID);
            });
            reader.on('error', (error) =>{
                console.error('erro ao buscar ID no DB', error);
                reject('erro ao buscar ID no DB ' + error)
            })
        })
    }

    updateID(){
        return new Promise(async (resolve, reject) =>{
            try {
                const newID = await this.getId();
                var obj = {
                    "id": newID
                };
                obj = JSON.stringify(obj);
                const writer = fs.createWriteStream('../server/db/id.json');
                writer.write(obj);
                resolve(true);
            } catch (error) {
                console.error('Erro ao atualizar o ID no DB', error);
                reject('Erro ao atualizar o ID no DB ' + error)
            }
        })
    }
}

module.exports = new UserRepository;