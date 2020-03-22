import Mock from 'mockjs'

const  Random = Mock.Random
//about
Mock.mock("http://localhost/about",'get',{
    "data":{
        "name":"李学",
        "sex":"男",
        "age":"24",
        "place":"福州市闽侯县",
        "college":"闽江学院",
        "major":"计算机科学与技术",
        "direction":"网络信息安全",
        "motto":"生活苦乐相伴,爱情在月下花海",
        "proUrl":'/img/head.cc5300ee.jpg',
        "collegeType":"大学本科",
        "email":"lixue_main@163.com",
        "weChat":"lx249875314",
        "evaluation":"性格开朗活泼，好学爱问，谦虚不骄傲，有较强的学习能力。能够快速适应新的环境，在新环境中卓越成长。只有在不断的努力中才能有所成就。"
    }
})
//skill
Mock.mock("http://localhost/skill",'get',{
    "data|1-10": [
        {
            "name":Random.string(10,15),
            "img": Random.image("600x600","#894FC4","LX"),
            "level": Random.integer(1,100),
            "platform": Random.string(5),
            "intro": Random.cparagraph(3)
        }
    ]
})

//experience
Mock.mock("http://localhost/experiences",'get',{
    "data|1-10":[
        {
            "place":Random.city(),
            "post":Random.cparagraph(0.5),
            "content":Random.cparagraph(3),
            "startTime": Random.datetime('yyyy-MM-dd'),
            "endTime": Random.datetime('yyyy-MM-dd'),

        }
    ]
})
//友情连接
Mock.mock("http://localhost/links","get",{
    "data|1-10":[
        {
            "url":Random.url(),
            "name": Random.cparagraph(0.4)
        }
    ]
})
// /blog  index    /blog/type   导航定位  /blog/type/1

//blog/banner
Mock.mock("http://localhost/banners","get",{
    "data|1-10":[
        {
            "url":Random.url(),
            "name": Random.cparagraph(2),
            "img": Random.image("600x600","#fff",'0'),
            "date": Random.datetime('yyyy-MM-dd')
        }
    ]
})
//blob/abstract  文章摘要
Mock.mock("http://localhost/abstracts","get",{
    "data|15":[
        {
            "id":Random.string(15),
            "img":Random.image("800x500","#ccc",'0'),
            "type": {
                "id":Random.string(15),
                "name":Random.string(10),
            },
            "date":Random.datetime('yyyy-MM-dd'),
            "title": Random.cparagraph(1),
            "abstract":Random.cparagraph(5),
        }
    ]
})
