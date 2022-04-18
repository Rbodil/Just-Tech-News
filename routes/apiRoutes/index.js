const router = require('express').Router();
const voteRoutes = require('./voteRoutes')
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/votes', voteRoutes)

module.exports = router;