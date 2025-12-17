import { log } from 'console';
import { readFile, writeFile } from 'fs';
import fs from 'fs/promises'




async function getPeopleListTofile() {
  const url = "https://spiestestserver.onrender.com/people";
  try {
    
    const response = await fetch(url);
   
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    fs.writeFile('../folders/people.json',  JSON.stringify(data));
    console.log(data);
     
    
  } catch (error) {
    console.error(error.message);
  }
  
}





async function readData(){
let a = await fs.readFile('../folders/people.json', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
 
}); return (a);}




export {getPeopleListTofile ,readData}