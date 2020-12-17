function chunkyMonkey(values, size) {
    //  write code here.
    const array = []   
    let count = 0
    while (count < values.length){
        array.push(values.slice(count, count += size))
    }
    return array
}



/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});