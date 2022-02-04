type Combineable = number | string;
type Conversion = 'as-number'|'as-text'

function combine(n1:Combineable,n2:number|string,resutlConversion:Conversion){
    let result;
    if(typeof n1 === 'number' && typeof n2==='number' || resutlConversion==='as-number'){
        result = +n1 + +n2 
    }else{
        result = n1.toString()+n2.toString()
    }
    // if(resutlConversion==='as-number'){
    //     return +result;
    // }else{
    //     return result.tostring()
    // }
    
    return result;
}
const combinedAges = combine('30','26','as-number');
console.log(combinedAges)
const combineNames = combine("Ana","Max",'as-text');
console.log(combineNames)