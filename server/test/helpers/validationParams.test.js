const ValidationParams = require('../../helpers/ValidationParams');

describe('Testando funções de helpers/ValidationParams', () =>{
    it('validatesEmail(), valida se o email é válido', async() =>{
        const result = await ValidationParams.validatesEmail('brunoribeiro@dev.com.br');
        expect(result).toBe(true);
    });

    it('validatesEmail(), valida se o email é válido passando email inválido', async() =>{
        jest.spyOn(console, 'error').mockImplementation(jest.fn());
        await expect(ValidationParams.validatesEmail('brunoribeiro'))
        .rejects
        .toMatch('email inválido');
    });

    it('validatesLengthParams(), valida o length da string passando o length mínimo e configurações adicionais', async() =>{
        const options = {
            ignore_whitespace: true
        };
        const result = await ValidationParams.validatesLengthParams(5, options, 'teste');
        expect(result).toBe(true);
    });

    it('validatesLengthParams(), valida o length da string passando o length mínimo e configurações adicionais com string curta', async() =>{
        jest.spyOn(console, 'error').mockImplementation(jest.fn());
        const options = {
            ignore_whitespace: true
        };
        await expect(ValidationParams.validatesLengthParams(5, options, 'test'))
        .rejects
        .toMatch('parâmetro inválido test');
    });
})