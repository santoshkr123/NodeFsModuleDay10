const http = require("http")
const fs = require("fs")
const server= http.createServer((req,res)=>{
  /*  fs.readFile('sample.txt','utf-8',(err,data)=>{
        if(err)
        {
            res.write("Failed to data")
            res.end()
        }else{
            console.log(data)
            res.write(data)
            res.end()
        }
    })
        */

/*
    fs.writeFile('test.txt' ,'My name is Nodejs',(err)=>{
        if(err)
        {
            res.write("Failed to created")
            res.end()
        }
        else 
        {
            res.write("File Created")
            res.end()
        }

    })
        */
/*
    fs.appendFile('test.txt' ,'\nMy name is React',(err)=>{
        if(err)
        {
            res.write("Failed to created")
            res.end()
        }
        else 
        {
            res.write("File Created")
            res.end()
        }

    })
        */

    /*
    fs.rename('sample.txt','hi.text',(err)=>{
        if(err)
        {
            res.write("File not renamed")
            res.end()

        }

        else 
        {
            res.write("File Renamed")
            res.end()
        }
    })
        */

    fs.unlink('hi.txt',(err)=>{
        if(err)
        {
            res.write("File not deleted")
            res.end()
        }
        else 
        {
            res.write("File deleted")
            res.end()
        }
    })



})
server.listen(8080)
