import Mock from 'mockjs'

// const  Random = Mock.Random

Mock.mock("http://localhost/about",'get',{
    "name":"李学",
    "motto":"生活苦乐相伴,爱情在月下花海",
    "proUrl":'/img/head.cc5300ee.jpg'
})
