var Sequelize = require('sequelize');


var sequelize = new Sequelize('myapp', 'root', 'abc123_', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


var Users = sequelize.define('user',{
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    address:Sequelize.STRING,
    phone:Sequelize.STRING,
    timestamps: false
});

//定义表的模型
var Message = sequelize.define('message', {
    id:{ //自增长id,主键,整形
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username: { //谁留的言
        type: Sequelize.STRING(30)
    },
    content: { //留言的内容
        type: Sequelize.TEXT
    }
});


module.exports = Users;