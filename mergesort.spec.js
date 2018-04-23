describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([1, 3, 2, 6])).toEqual([[[1], [3]], [[2], [6]]]);
    });

    it('is able to split an array into two halves', function() {
        expect(split([1, 3, 5, 10, 6])).toEqual([
            [[1], [3]],
            [[5], [[10], [6]]],
        ]);
    });
});

xdescribe('Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
        // test the merging algorithm
    });
});
