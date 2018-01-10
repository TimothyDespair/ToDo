//@flow

/**
 * Takes two arrays and zips them (returns an array of tuple
 * pairs for each index in the originals). If the arrays are
 * different lengths it pads the shorter array with value provided
 * to third argument. Defaults to 'undefined.'
 *
 * The values from ArrayA will be index 0 in the tuple. ArrayB will
 * be index 1.
 *
 * @param   {Array} arrayA  An array.
 * @param   {Array} arrayB  An array.
 * @param   {any}   [padValue=undefined]
 *                          A value to pad out the shorter array.
 * @returns {Array}         Zipped array described above.
 */
function padZip(
  arrayA:    Array<A>,
  arrayB:    Array<B>,
  padValue?: any = undefined,
): Array<[A,B]> {
  const longer =
    arrayA > arrayB ?
      arrayA :
      arrayB
  const shorter =
    arrayA < arrayB ?
      arrayA :
      arrayB
  return longer.map((_, index) => {
    return [
      typeof arrayA[index] !== 'undefined' ?
        arrayA[index] :
        padValue,
      typeof arrayB[index] !== 'undefined' ?
        arrayB[index] :
        padValue,
    ]
  })
}

export default padZip
