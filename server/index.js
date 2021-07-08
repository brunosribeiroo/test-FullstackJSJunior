const customExpress = require('./config/customExpress')
const app = customExpress();
const UserRepository = require('./repository/UserRepository');

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () =>{
    await UserRepository.createDB();
    console.log(`Servidor rodando na porta ${PORT}`);
})