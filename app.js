require("dotenv/config")

const server = require("./server");
const port = process.env.PORT || 3000;
const database = require('./src/configs/db');

async function init() {
    try {
        await database.authenticate()
        await database.sync({alter : true}) 
        
        server.listen(port, () => {
            console.log(`Conection to Database Success`)
            console.log(`Service running on port ${port}`)
        })
    } catch (error) {
        console.log(`Conection to Database Success`)
        console.log(error.message)
        process.exit(1)
        
    }
}

init()