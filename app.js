import path from 'path';
import express from 'express';

const app = express();

app.set('/public', express.static(path.resolve(__dirname, "dist/public")));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(8080,'0.0.0.0', (err)=>{
    if(err) throw err;

    console.log("Server listening on http://localhost:8080");
});
