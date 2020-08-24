const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream("data.csv");


// Template 1
const url = "https://yellopagespakistan.com/online-baby-shop-in-pak---all-your-baby-needs-here-#P#.html";
const start = 8010;
const end = 8020;
const nameTag = "span[itemprop='name']";
const numberTag = "span[itemprop='telephone']";


// Template 2
// const url = "https://www.jamals.com/search?type=companies&query=real%20estate&location=&page=#P#";
// const start = 1;
// const end = 3;
// const nameTag = "h5.add-title";
// const numberTag = "li[class*=listing-phone]";


writeStream.write(`Company Name,Phone \n`);

const isSinglePaged = false;

if(start < end){
    if(isSinglePaged){
        for(let i = start; i <= end; i++){
            let formattedUrl = url.replace("#P#", i);
            request(formattedUrl, (error, response, html) => {
                if(!error && response.statusCode  == 200){
                    const $ = cheerio.load(html);
                    console.log(`Searching on page with url: ${formattedUrl}`);
    
                    const name = $(nameTag).text();
                    const number = $(numberTag).text();
                    if(number){
                        writeStream.write(`${name},${number} \n`);
                    }
                    
                }
            });
        }
    }else{
        for(let i = start; i <= end; i++){
            let formattedUrl = url.replace("#P#", i);
            request(formattedUrl, (error, response, html) => {
                if(!error && response.statusCode  == 200){
                    const $ = cheerio.load(html);
                    console.log(`Searching on page with url: ${formattedUrl}`);
    
                    let name = []
                    let number = []
                    const count = 1;
                    $(nameTag).each((i, el) => {
                        name.push($(el).text().trim());
                    })
                    $(numberTag).each((i, el) => {
                        number.push($(el).text().trim());
                    })
                    
                    name.forEach((n, index) => {
                        num = number[index];
                        writeStream.write(`${n},${num} \n`);
                    })
                }
            });
        }
    }
}
