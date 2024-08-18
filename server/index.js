const express =  require ('express'),
cors = require ('cors');
const app = express();
app.use(express.json());
app.use(cors());

// app.use('/users', require('./api/users'));
app.use('/users', ()=>{
    console.log("Welcome");
    
});





module.exports = app;