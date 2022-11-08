const calculator=require("./calculator");

test("Testing add",()=>{

    expect(calculator.add(1,2)).toBe(3)

});

 

test("Testing Product",()=>{

    expect(calculator.Product(2,4)).toBe(8)

});

 

test("Testing Divide",()=>{

    expect(calculator.Divide(10,2)).toBe(5)

});

test("Testing Divide Part2",()=>{

    expect(calculator.Divide(10,0)).toBe(Infinity)
});

test("Testing Subtract",()=>{

    expect(calculator.subtract(4,2)).toBe(2)

});