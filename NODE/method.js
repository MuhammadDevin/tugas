const http = require('http')

const server = http.createServer((req, res)=> {
    let url, method, dataResponse;

    res.setHeader("Content-Type", "application/json");
    url = req.url;

    method = req.method ?? "get" // ambil methodnya, jika tidak ada maka ubah menjadi get
    if(url === "/") {
        dataResponse = {
            data: 'ini adalah halaman homepage'
        }; 
    } else if (url.toLowerCase()  == "/login"){
        if(method.toLowerCase() === 'post'){
            dataResponse = {
                data : "anda login dengan method post"
            }; 
        } else {
            dataResponse = {
                data : "Anda di get"
            };
        } 
    } else {
        dataResponse = {
            data: "404 not found"
        }
    }

    return res.end(JSON.stringify(dataResponse));
});

server.listen(8000);