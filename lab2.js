var http = require('http');
var url = require('url');

http.createServer(function(req,response){
//get the whole querystring (parameter list) ?method =
    var qs = url.parse(req.url,true).query;
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);

    if(method == 'add'){
        response.write(x + ' + '+y+' = '+(x+y));
    }else if(method == 'divide'){
        response.write(x + ' / '+y+' = '+(x/y));
    }else if(method == 'multiply'){
        response.write(x + ' * '+y+' = '+(x*y));
    }else if(method =='subtract'){
        response.write(x + ' - '+y+' = '+(x-y));
    }else{
        response.write('method error');
    }
    response.end();
}).listen(3000)
console.log('server running on port 3000');