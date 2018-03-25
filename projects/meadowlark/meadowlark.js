var express = require('express');

var app = express();

//핸들바 뷰 엔진 설정
var handlebars = require('express-handlebars')
.create({ defaultLayout: 'main' });
app
    .engine('handlebars', handlebars.engine)
    .set('view engine', 'handlebars')
    .set('port', process.env.PORT  ||  3000)


    .get('/', function(req,res){
    res.render('home');
})
    .get('/about', function(req, res){
    res.render('about', { fortune: fortune.getFortune()});
})

//커스텀 404 페이지
    .use(function(req, res, next){
    res.status(404);
    res.render('404');
})

//커스텀 500 페이지
    .use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' ) ;
});

