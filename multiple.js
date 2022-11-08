
function multiple(a,b,c)
{
    let sum=0;
    for(let i=1; i<c;i++)
    {
       if(i % a===0  || i % b===0 )
       {
         sum=sum+i;

       }

    }
    return sum ;
}
module.exports=multiple;