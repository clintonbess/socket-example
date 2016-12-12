document.getElementById('palindrome-field')
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        checkPalindrome();
    }
});