const User = require('../../models/User');

describe('Testando funções de models/User', () =>{
    it('setID(), adiciona o id ao User', async() =>{
        const user = new User();
        const result = await user.setID(1);
        expect(result).toBe(true);
    });

    it('setEmail(), adiciona o id ao User passando id inválido', async() =>{
        const user = new User();
        jest.spyOn(console, 'error').mockImplementation(jest.fn());
        await expect(user.setID('1'))
        .rejects
        .toMatch('Erro ao adicionar email ao objeto User Error: ID inválido')
    });

    it('setEmail(), adiciona o email ao User', async() =>{
        const user = new User();
        const result = await user.setEmail('brunoribeiro@dev.com.br');
        expect(result).toBe(true);
    });

    it('setEmail(), adiciona o email ao User passando email inválido', async() =>{
        const user = new User();
        jest.spyOn(console, 'error').mockImplementation(jest.fn());
        await expect(user.setEmail('brunoribeirodev.com.br'))
        .rejects
        .toMatch('Erro ao adicionar email ao objeto User email inválido')
    });

    it('setPassword(), adiciona a senha ao User ', async() =>{
        const user = new User();
        const result = await user.setPassword('teste');
        expect(result).toBe(true);
    });

    it('setPassword(), adiciona a senha ao User passando senha inválida', async() =>{
        const user = new User();
        jest.spyOn(console, 'error').mockImplementation(jest.fn());
        await expect(user.setPassword('test'))
        .rejects
        .toMatch('Erro ao adicionar senha ao objeto User parâmetro inválido test')
    });
})