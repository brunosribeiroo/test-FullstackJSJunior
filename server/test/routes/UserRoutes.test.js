const app = require('../../config/customExpress')();
const supertest = require('supertest');

describe('Testando rotas de usuários', () =>{
    it('POST /api/v1/users, adiciona um novo usuário ao DB', async done =>{
        const res = await supertest(app).post('/api/v1/users').send({
                email: 'brunoteste@dev.com.br',
                senha: 'testando'
            });
        expect(res.body.error).toEqual('Email já existe');
        done();
    })
});
