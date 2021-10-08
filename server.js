const express=require('express');
const puppeteer=require('puppeteer');
const path=require('path');
const app=express();


//const url='http://127.0.0.1:5501/test.html'; //for Websites URL

const htmlFile=path.resolve("./test.html")

async function convertPdf(){
    const browser=await puppeteer.launch();
    const web=await browser.newPage();

    await web.goto(htmlFile,{
             waitUntill:'networkidle0'
         });

    await web.pdf({
        printBackground:true,
        displayHeaderFooter:true,
        path:"Techkey1.pdf",
        format:"a4",
        margin:{
            top:"2px",
            left:"40px",
            right:"40px",
            bottom:"16px"
        }
   }).then(()=>{
        console.log("PDF Downloaded Succesfully")
    }).catch(err=>{
        console.log(err.message);
    })
    
await browser.close()
}
convertPdf();

// app.get('/',(req,res)=>{
//     res.sendFile('./web5.pdf',{root:__dirname}); Send File To Client
// })

app.listen(3000);