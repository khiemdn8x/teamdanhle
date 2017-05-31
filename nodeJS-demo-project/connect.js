const Sequelize = require("sequelize");
const sequelize = new Sequelize("hanoitravel","root","123456",{
    host:"localhost",
    dialect:"mysql",
    port:"3306",
    pool:{
        max:5,
        min:0,
        idle:10000
    }
});

sequelize.authenticate().then(()=>{
    console.log("Successfully");
}).catch(err=>{
    console.error("Failed",err);
})