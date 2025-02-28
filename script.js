document.getElementById("clickMe").addEventListener("click", function() {
    let name = prompt("What's your name?");
    if (name) {
        alert("Nice to meet you, " + name + "! 🎉");
    } else {
        alert("You didn't enter a name! 😅");
    }
});
