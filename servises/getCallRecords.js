import fs from 'fs/promises'




async function getCallRecords() {
  const url = "https://spiestestserver.onrender.com/transcriptions";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    fs.writeFile('../folders/TRANSCRIPTIONS.json',  JSON.stringify(data));
    console.log(data);
    
  } catch (error) {
    console.error(error.message);
  }
}



async function readDat(){
let a = await fs.readFile('../folders/TRANSCRIPTIONS.json', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
 
});  return (a);}


export {getCallRecords ,readDat}