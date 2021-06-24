const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

// 누군가가 /pet 으로 방문 하면
// pet 관련 안내문을 띄워주자

app.get('/pet', function(req, res){
    res.send('Pet용품을 구매할 수 있는 사이트입니다.');
});

app.get('/beauty', function(req, res){
    res.send('뷰티용품을 구매할 수 있는 사이트입니다.');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html');
});
