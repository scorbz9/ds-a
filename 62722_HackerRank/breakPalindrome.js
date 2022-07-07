function breakPalindrome(palindromeStr) {
    if (palindromeStr.length === 1) return 'IMPOSSIBLE';

    let firstNonA;
    for (let i = 0; i < palindromeStr.length; i += 1) {
        if (palindromeStr[i] !== 'a') {
            if (!firstNonA) firstNonA = i;
            const newString = palindromeStr.slice(0, firstNonA) + 'a' + palindromeStr.slice(firstNonA + 1);
            if (isPalindrome(newString)) continue;
            return newString;
        }
    }

    return "IMPOSSIBLE";
}

function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}

console.log(isPalindrome('abba'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('dog'))
