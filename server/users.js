const express = require('express'),
    router = express.Router();
    
const jsonobj = {
    x: '?',
    y: '!'
}

router.get('/', (req, res) => {
    res.json(jsonobj.x)
})


module.exports = router;