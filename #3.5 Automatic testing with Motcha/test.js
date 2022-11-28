describe("pow(2, 3)", function() {

    function makeTest(x) {

        let expected = x * x * x;
        
        it(`${x} в степени ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }
    
    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

    // it("возводит 2 в степень 3 = 8", function() {
    //     assert.equal(pow(2, 3), 8);
    // });

    // it ("возводит 3 в степень 3 = 27", function() {
    //     assert.equal(pow(3, 3), 27);    
    // });
  
  });
