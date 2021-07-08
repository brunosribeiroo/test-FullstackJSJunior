const UserController = require("../controllers/UserController");

module.exports = (app) =>{
    app.get('/api/v1/users', (req, res) =>{
        UserController.getUsersAll(req, res);
    });

    app.get('/api/v1/users/:id', (req, res) =>{
        UserController.getUsersById(req, res);
    });

    app.post('/api/v1/users', (req, res) =>{
        UserController.createUser(req, res);
    });

    app.put('/api/v1/users/:id', (req, res) =>{
        UserController.updateUserById(req, res);
    });

    app.delete('/api/v1/users/:id', (req, res) =>{
        UserController.deleteUserById(req, res);
    });

    app.delete('/api/v1/users', (req, res) =>{
        UserController.deleteAllUsers(req, res);
    });
}