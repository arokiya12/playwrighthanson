let StringAssig = "Hello World"
let split = StringAssig.split(" ")
let result = split[split.length-1]
console.log(result.length)
//2 
{
let input ="fly me to the moon"
let Splitinput= input.split(" ")
let splitresult  =Splitinput.length-1
console.log("Moon Index is "+splitresult)
}
{
   function isAnagramstatus(str1,str2){

   
//    if(str1.length!==str2.length)
//     return true
   
    let sortedstr1 = str1.split('').sort().join('')
    let sortedstr2 = str2.split('').sort().join('')
    
     return sortedstr1==sortedstr2
     }
     
console.log(isAnagramstatus('listen','silent'))
console.log(isAnagramstatus('Hello','world'))
     }
