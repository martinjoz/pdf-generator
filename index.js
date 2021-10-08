const easyinvoice=require('easyinvoice');
const path=require('path');
const fs = require('fs');


let img=path.resolve('img','s.png');

function base64_encode(img){
    let png=fs.readFileSync(img);
    return new Buffer.from(png).toString('base64')
}

let data ={
    "currency": "USD", 
    "taxNotation": "vat", 
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": `${base64_encode(img)}`, 
 "sender": {
        "company": "TECHKEY CYBERNETICS",
        "address": "NAIROBI, NGARA TOWERS",
        "zip": "1234 ",
        "city": "NAIROBI",
        "country": "KENYA"
    },
    "client": {
        "company": "Addressed To",
        "address": "Techkey",
        "ATTN":"Alexander Karanja",
        "zip": "303",
        "city": "Ngara",
        "town": "Nairobi, Nairobi, 0100",
        "country":"Kenya"
    },
    "invoiceNumber": "2021.0001",
    "invoiceDate": "1.1.2021",
    "dueDate":"1.2.2021",
    "products": [{
            "quantity": "1",
            "description": "BASIC Hosting - techkey.co.ke(29/08/2021 - 28/08/2022)",
            "tax": 0,
            "price": 3500
        }
    ],
    "bottomNotice": "PDF Generated on Sunday, August 29th, 2021",
    "bottomNotie":"Paybill Number: 0000",
    "bottomNotie":"Account Name: Techkey"
       
   
    
};


const invoicePdf=async ()=>{
    let result=await easyinvoice.createInvoice(data);
    fs.writeFileSync(`invoice${Date.now()}.pdf`,result.pdf,'base64');
}

invoicePdf();



