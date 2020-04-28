const express = require('express');
const { connectToDatabase } = require('./mongoDB/controller');



const PORT = 4200;
const app = express();

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




process.addListener( 'uncaughtException', handleUncaughtException );

function handleUncaughtException( event ){
    console.log( event );
}



app.listen( PORT ,() => {
    console.log( `Listening at port : ${PORT}`)
})