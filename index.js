import express from "express";
import { Entry } from "./db.js";

const app=express();

const PORT=process.env.PORT||3001;

app.get('/',async (req,res)=>{
    try {
        const entry = new Entry({ text: 'This is an  second entry' });
        await entry.save();
        res.send('Entry added second time !');
      } catch (err) {
        res.status(500).send('Error occurred');
      }
});


app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`);
})