const express = require('express');
const path = require('path');
const fs = require('fs');

const { connectToDatabase } = require('./mongoDB/controller');



const PORT = 80;
const app = express();


app.use(
    express.static(
        path.join(
            __dirname, '../', 'build'
        )
    )
)


app.get('/getData', async ( req, res ) => {

    try{
        let result = await connectToDatabase();
        console.log( result );
        res.json({
            ping: "Ping recieved",
            message: "DB connected."
        })
    }catch( err ){
        console.log( err )
        res.json({
            ping: "Ping recieved: Db Errored",
            erroMesssage: err
        })
    }
    
})


app.get( '**', ( req, res ) => {

    console.log( req.url );
    fs.createReadStream(
        path.join(
            __dirname, '../', 'build', 'index.html'
        )
    ).pipe( res )

})




process.addListener( 'uncaughtException', handleUncaughtException );

function handleUncaughtException( event ){
    console.log( event );
}



app.listen( PORT ,() => {
    console.log( `Listening at port : ${PORT}`)
})