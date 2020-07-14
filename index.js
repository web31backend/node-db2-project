let server = require("./api/server");

let PORT = process.env.PORT || 1123;

server.listen(PORT, () => {
    console.log(`\n *** server up & running on port ${PORT} *** \n`)
})