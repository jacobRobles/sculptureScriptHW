//jacob robles 4/24/2025
//sculpture project assignment


const sculptureList = require("./data.js");
//const element = sculptureList[1]
const sculptureListLengths = [];

sculptureList.forEach((sculpture) => {
    const lengthObject = {};

    for (const key in sculpture) {
        lengthObject[key] = sculpture[key].length;

    }

    sculptureListLengths.push(lengthObject);

});

console.log(JSON.stringify( sculptureListLengths, 1, 1));
//console.log("sculptureListLengths:", sculptureListLengths);



//note for professor!!!
//not sure why I have a different output "on 1st element" compared to the output on github
//but im pretty sure there might be a mistake with the output on github
//my output matches my data.js