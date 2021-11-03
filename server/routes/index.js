const { Router } = require('express');
// eslint-disable-next-line import/extensions
const productsRoute = require('./productsRoute');

const router = Router();

// aqui vai todas as rotas
router.use('/', productsRoute);

module.exports = router;
