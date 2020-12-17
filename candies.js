function candies(children, candy) {
    //  write code here.
    const candyPerChild = Math.floor(candy/children)
    const totalCandy = candyPerChild * children
    
    return totalCandy
}



/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});