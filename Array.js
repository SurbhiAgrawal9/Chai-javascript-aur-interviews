// there is array with aditional property.. apply loop ans display original array 
// Based on prototype

Array.prototype.extraProperty = "surbhi"
const myArray = [1,2,3,4,5]

// don't use direct loop on array otherwise found extraproperty 

// original property only .. ignore additional 
    for(let v in myArray){
      
    
if(myArray.hasOwnProperty(v)){
  console.log(v)
  
}
    }


