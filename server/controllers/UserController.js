const User = require('../models/User');
const UserRepository = require('../repository/UserRepository');

class UserController{

    async createUser(req, res){
        try {
            const {email, senha} = req.body;
            const select = await UserRepository.getUserByEmail(email);
            if(select != false){
                res.status(200).send({error:'Email já existe'});
                return;
            }
            const id = await UserRepository.getId();
            await UserRepository.updateID();
            const user = new User();
            await user.setID(id);
            await user.setEmail(email);
            await user.setPassword(senha);
            await UserRepository.createUser(user);
            res.status(200).send({message: 'Usuário cadastrado com sucesso'})
        } catch (error) {
          console.error('Erro ao criar novo usuário', error);
          res.status(500).send({error: 'Erro ao criar novo usuário'})  
        }
    }

    async getUsersAll(req, res){
        try {
            const select = await UserRepository.getUserAll();
            res.status(200).send(select);
        } catch (error) {
            console.error('Erro ao buscar usuários', error);
            res.status(500).send({error: 'Erro ao buscar usuários'})  
        }
    }

    async getUsersById(req, res){
        try {
            const id = req.params.id;
            const select = await UserRepository.getUserById(id);
            res.status(200).send(select);
        } catch (error) {
            console.error('Erro ao buscar usuário por ID', error);
            res.status(500).send({error: 'Erro ao buscar usuário por ID'})  
        }
    }

    async updateUserById(req, res){
        try {
            const id = req.params.id;
            const {email, senha} = req.body;
            await UserRepository.updateUserById(email, senha, id);
            res.status(200).send('Usuário editado com sucesso')
        } catch (error) {
            console.error('Erro ao editar usuário por ID', error);
            res.status(500).send({error: 'Erro ao editar usuário por ID'}) 
        }
    }

    async deleteAllUsers(req, res){
        try {
            await UserRepository.deleteAllUsers();
            res.status(200).send('Usuários deletados com sucesso');
        } catch (error) {
            console.error('Erro ao excluir usuários', error);
            res.status(500).send({error: 'Erro ao excluir usuários'}) 
        }
    }

    async deleteUserById(req, res){
        try {
            const id = req.params.id;
            await UserRepository.deleteUserById(id);
            res.status(200).send('Usuário deletado com sucesso');
        } catch (error) {
            console.error('Erro ao excluir usuários', error);
            res.status(500).send({error: 'Erro ao excluir usuários'}) 
        }
    }
}

module.exports = new UserController;