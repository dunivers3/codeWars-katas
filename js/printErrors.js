/**
 * In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
 */

function printerError(s) {
    /**
     * P: takes in a string of letters from a - m
     * R: returns a string of the fraction of the error rate
     * E: s="aaaxbbbbyyhwawiwjjjwwm" --> printer_error(s) => "8/22"
     * P:
     * 1.convert the string into an array using split method
     * 2.total length of the string is string.lenth, so, sort the array and remove letters coming after m
     * 3.return two arrays, one with all the letters, and the other with only letters coming after m
     * 4.return array2/array1, concatinating the two using the forward slash to maintain the string 'type'
     */
    //1
    const arr = s.split("")
    //2
    const sortedArr = arr.sort((a, b) => a.localeCompare(b))
    console.log(sortedArr)
    //3
    let allowed = 'abcdefghijklm'
    let error = 0

    arr.forEach(function (item) {
        return (allowed.indexOf(item) === -1) ? error++ : ""
    })

    console.log(error + '/' + s.length)
}

printerError("aaaxbbbbyyhwawiwjjjwwm")
