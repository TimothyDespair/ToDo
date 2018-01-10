//@flow

/**
 * Takes two arrays and zips them (returns an array of tuple
 * pairs for each index in the originals). If the arrays are
 * different lengths it clips the longer array.
 *
 * The values from ArrayA will be index 0 in the tuple. ArrayB will
 * be index 1.
 *
 * @param   {Array} arrayA  An array.
 * @param   {Array} arrayB  An array.
 * @returns {Array}         Zipped array described above.
 */
function clipZip(
  arrayA:    Array<A>,
  arrayB:    Array<B>,
): Array<[A,B]> {
  const longer =
    arrayA > arrayB ?
      arrayA :
      arrayB
  const shorter =
    arrayA < arrayB ?
      arrayA :
      arrayB
  return shorter.map((_, index) => {
    return [
      arrayA[index],
      arrayB[index],
    ]
  })
}

export default clipZip
