const Sequelize = require("sequelize");
const sequelize = new Sequelize("hanoitravel", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
    port: "3306",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log("Successfully");
}).catch(err => {
    console.error("Failed", err);
})

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING({
            length: 50,
        }),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING({
            length: 30,
        }),
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
    }
});

const Post = sequelize.define("post", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING({
            length: 100,
        }),
        allowNull: false
    },
    summary: {
        type: Sequelize.STRING({
            length: 200,
        }),
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
    },
    status: {
        type: Sequelize.BOOLEAN,
    }
});

Post.findById(1).then(post=>{
    console.log(post.dataValues);
})