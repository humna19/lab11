const Secondcalculator=require('./secondCalculator');

test ("Testing of no1",()=>
{
    expect(Secondcalculator.pow(2,3)).toBe(8)
});


test ("Testing of no2",()=>
{
    expect(Secondcalculator.round(2.8)).toBe(3)
});


test ("Testing of no3",()=>
{
    expect(Secondcalculator.ceil(2.8)).toBe(3)
});