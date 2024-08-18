const express = require('express'),
    router = express.Router();

const jsonobj = {
    x: '?',
    y: '!'
}

router.get('/', (req, res) => {
    res.json(jsonobj.y)
})


module.exports = router;