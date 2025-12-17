
async function readData(){
let a = await fs.readFile('../folders/people.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 
});  console.log (a);}
console.log(readData());