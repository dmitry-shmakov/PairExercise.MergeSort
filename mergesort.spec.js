describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1,2,3,4,5])).toEqual([[1,2], [3, 4,5]])
    });
  });
describe('Merge function', function(){
        it('is able to merge two sorted arrays into one sorted array', function(){
          expect(merge([[1,3],[2,4]])).toEqual([1,2,3,4])
        });
      });
describe('MergeSort function', function(){
        it('is able to split an array into two halves and merge the sorted arrays into one sorted array', function(){
          expect(mergeSort([7, 8, 10, 3, 50, 9, 2])).toEqual([2, 3, 7, 8, 9, 10, 50])
        });
      });