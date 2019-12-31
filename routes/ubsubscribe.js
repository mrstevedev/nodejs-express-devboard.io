const express = require('express');
app = express();
const router = express.Router();

router.get('/', (req, res) => {
    console.log('unsubscribe');
    res.render('unsubscribe', { path: 'unsubscribe' });
});

module.exports = router;