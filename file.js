const fs = require('fs')

const http = require('http')



//function to retrieve jso data
http.get('http://jsonplaceholder.typicode.com/posts', resp =>{
    let rawData = ""

    //event handler adding all data from API together in an empty string
    resp.on("data", chunk =>{
        rawData+=chunk
    })


    //event handler after pulling data from API
    resp.on("end", chunk =>{
        let url = rawData
        
        //data  in JSON format
        let json = JSON.parse(url)

       

        //write to json file
        fs.writeFile('submit/posts.json', JSON.stringify(json), (err)=>{
            if(err) throw err
            console.log('successful')
        })
    })


})




