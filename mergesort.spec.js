describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1,2,3,4,5]).toEqual([[1,2,3], [4,5]])) 
    });
  });