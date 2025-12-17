
import { log } from 'console';
import {getPeopleListTofile ,readData} from './get_peopleList.js'
import {getCallRecords ,readDat} from './getCallRecords.js'
import  readlineSync from 'readline-sync'

let menu = "1. Get People List \n 2.Get Call Records \n 3.. Search People by Name \n 4.Search People by Age \n 5. Find Dangerous People"


while(true){
    console.log(menu);
    let userInput = readlineSync.question("enter your choice")
    console.log(userInput);
    
    if (userInput === "1"){
    
        getPeopleListTofile()
    break
    }


    else if (userInput === "2"){
        getCallRecords()
        break

    }
    else if (userInput === "3"){
        let data = await readData()
        let o =  JSON.parse(data)
        
        
        let search =  readlineSync.question("enter name")
       
        
        
        
        for( let obj of o){
            if(search === obj.name){
                console.log(obj);
                
            }
        }
   break }
            
            
            
                

    
     else if (userInput === "4"){
        let data = await readDat()
        let o =  JSON.parse(data)
       
        
        
        let search =  readlineSync.question("enter age")
        
    let u = Number(search);
    console.log(u);
    
       
        
        
        
        for( let obj of o){
            if(u === obj.age){
                console.log(obj);}
                
                
                
            }
     break   }



     else if (userInput === "5"){
        let lis = ["death" ," knife" ," bomb" ,"attack"]
        let a =  getPeopleListTofile()
        for (let i of a){
            if (i includ)
        }


     }
    }
            


    
