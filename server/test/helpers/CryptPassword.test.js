const CryptPassword = require('../../helpers/CryptPassword');

describe('Testando funções de helpers/CryptPassword', () =>{
    it('encryptPassword(), criptografa uma senha e retorna ela criptografada', async() =>{
        const result = await CryptPassword.encryptPassword('testando');
        expect('string').toBe(typeof result);
    });

    it('decryptPassword(), compara a senha informada com o a senha criptografada', async() =>{
        const hash = '$2a$10$uGkZUZAWJ0oRQ0Pr96f/V.HB04ZzKqDHrvsdrRLejRmDGUHrHS/Tq';
        const result = await CryptPassword.decryptPassword('testando', hash);
        expect(result).toBe(true);
    });

    it('decryptPassword(), compara a senha informada com o a senha criptografada passando senha incorreta', async() =>{
        const hash = '$2a$10$uGkZUZAWJ0oRQ0Pr96f/V.HB04ZzKqDHrvsdrRLejRmDGUHrHS/Tq';
        const result = await CryptPassword.decryptPassword('teste', hash);
        expect(result).toBe(false);
    });
})