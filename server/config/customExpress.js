const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const routes = require('../routes/routes');

module.exports = () =>{
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    routes(app);
    return app;
}