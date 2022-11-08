function reverseStr(str)
 {
    var newStr = "";

    for (var j = str.length - 1; j >= 0; j--)
     {
        newStr += str[j];
    }
    return newStr;
}
module.exports.reverseStr=reverseStr;
