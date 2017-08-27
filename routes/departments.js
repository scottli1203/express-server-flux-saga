var express = require('express');
var router = express.Router();

router.get('/',function(req,res){

    var departments = [
        {
            "depId":"1",
            "depName":"A"
        },
        {
            "depId":"2",
            "depName":"B"
        },
        {
            "depId":"3",
            "depName":"C"
        },
        {
            "depId":"4",
            "depName":"D"
        }
    ];

    res.json({departments:departments});
});

router.get('/:departmentId/users',function(req,res){
    var departmentId = Number(req.params.departmentId);
    var users = null;
    switch (departmentId){
        case 1:
            users = [
                {
                    "userId": 1,
                    "username": "李传伟",
                    "email": "lichuanwei@douyu.tv",
                    "address": "湖南"
                },
                {
                    "userId": 2,
                    "username": "李伟",
                    "email": "liwei@douyu.tv",
                    "address": "湖南"
                },
                {
                    "userId": 3,
                    "username": "伟",
                    "email": "wei@douyu.tv",
                    "address": "湖南"
                }
            ];
            break;
        case 2:
            users = [
                {
                    "userId": 4,
                    "username": "张三",
                    "email": "zhangsan@douyu.tv",
                    "address": "北京"
                },
                {
                    "userId": 5,
                    "username": "李四",
                    "email": "lisi@douyu.tv",
                    "address": "上海"
                }
            ];
            break;
        case 3:
            users = [
                {
                    "userId": 6,
                    "username": "小明",
                    "email": "xiaoming@douyu.tv",
                    "address": "深圳"
                },
                {
                    "userId": 7,
                    "username": "小芳",
                    "email": "xiaofang@douyu.tv",
                    "address": "广州"
                }
            ];
            break;
        case 4:
            users = [
                {
                    "userId": 8,
                    "username": "小红",
                    "email": "xiaohong@douyu.tv",
                    "address": "北京"
                },
                {
                    "userId": 5,
                    "username": "李四",
                    "email": "lisi@douyu.tv",
                    "address": "上海"
                },
                {
                    "userId": 4,
                    "username": "张三",
                    "email": "zhangsan@douyu.tv",
                    "address": "北京"
                },
                {
                    "userId": 6,
                    "username": "小明",
                    "email": "xiaoming@douyu.tv",
                    "address": "深圳"
                },
            ];
            break;
        default:
            break;


    }

    res.json({users:users});
});

module.exports = router;