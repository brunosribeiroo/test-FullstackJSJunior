class ValidationParams{

    validatesEmail(email){
        return new Promise((resolve, reject) => {
            const validate = ' ';
            var re = /\S+@\S+\.\S+/;
            if(email.includes(validate) || !re.test(email)){
                reject('email inválido');
            } else {
                resolve(true);
            }
        })
    }

    validatesLengthParams(length = 2, options, ...array){
        return new Promise((resolve, reject) =>{
            const validate = (param) =>{
                return new Promise((resolve, reject) =>{
                    if(options.ignore_whitespace === true){
                        param = param.replace(/\s/g,'');
                    }
                    param.length >= length ? resolve(true) : reject('parâmetro inválido ' + param)
                })
            }
            const run = array.map(i => validate(i));
            Promise.all(run).then(res => resolve(true)).catch(error => reject(error));
        })
    }

}

module.exports = new ValidationParams;