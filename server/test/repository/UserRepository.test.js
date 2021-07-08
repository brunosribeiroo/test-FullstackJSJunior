const UserRepository = require('../../repository/UserRepository');

describe('Testando funções de repository/UserRepository', () =>{

    it('getUserAll(), busca todos os usuários no DB', async() =>{
        const result = await UserRepository.getUserAll();
        expect(true).toBe(Number.isInteger(result[0].id));
    })

    it('getId(), retorna o ID para ser utilizado na próxima inserção no DB', async() =>{
        const result = await UserRepository.getId();
        expect(true).toBe(Number.isInteger(result));
    });

    it('updateId(), atualiza o ID do DB', async() =>{
        const result = await UserRepository.updateID();
        expect(result).toBe(true);
    });

    it('createUser(), adiciona um usuário ao DB', async() =>{
        const obj = {
            id: Math.floor(Math.random() * 10) + 1000,
            email: 'teste@teste.com.br',
            password: 'testando',
            deleted: false,
            create_at: new Date(),
            update_at: null
        }
        const result = await UserRepository.createUser(obj);
        expect(result).toBe(true);
    });

    it('getUserByEmail(), busca o usuário no DB por email', async() =>{
        const result = await UserRepository.getUserByEmail('teste@teste.com.br');
        expect(result.email).toBe('teste@teste.com.br');
    });

    it('getUserByEmail(), busca o usuário no DB passando email que não existe', async() =>{
        const result = await UserRepository.getUserByEmail('teste@teste2.com.br');
        expect(result).toBe(false);
    });

    it('getUserById(), busca o usuário no DB por ID', async() =>{
        const result = await UserRepository.getUserById(25);
        expect(result.email).toBe('brunoteste@dev.com.br');
    });

    it('getUserById(), busca o usuário no DB por ID passando ID excluído', async() =>{
        const result = await UserRepository.getUserById(101010);
        expect(result).toBe('Usuário não encontrado');
    });

    it('updateUserById(),atualiza o usuário por ID', async() =>{
        const email = 'teste@teste123.com.br';
        const senha = 'testando';
        const id = 27
        const result = await UserRepository.updateUserById(email, senha, id);
        expect(result).toBe(true);
    });

    it('deleteAllUsers(), deleta todos os usuários', async() =>{
        const result = await UserRepository.deleteAllUsers();
        expect(result).toBe(true);
    });

    it('deleteUserById(), deleta o usuário por ID', async() =>{
        const result = await UserRepository.deleteUserById(27);
        expect(result).toBe(true);
    });
})