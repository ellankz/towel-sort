module.exports = function towelSort(matrix) {
    return !matrix
        ? []
        : matrix.reduce((newArr, inner, index) => {
              const returnedInner =
                  (index + 1) % 2 === 0 ? inner.reverse() : inner;
              return [...newArr, ...returnedInner];
          }, []);
};
