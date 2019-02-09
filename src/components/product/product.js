/*
const fs = require("fs");
const path = require("path");
const re = new RegExp('png');

function getProduct(dir){
    const array2 = [];
    fs.readdirSync(dir).forEach((fileName) => {
        const pathName = path.join(dir, fileName);
        if(fs.statSync(pathName).isDirectory()){
            getProduct(pathName);
        }else if(re.test(pathName)){
            array2.push(pathName);
        }
    })
    return array2;
}

const a = getProduct("../product");
console.log(a);
export default getProduct;
*/
