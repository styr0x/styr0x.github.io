const wordBox = document.getElementById("wordBox")
const charAmount = document.getElementById("charAmount")
const wordAmount = document.getElementById("wordAmount")

wordBox.addEventListener("input", countChars)

export function countChars() {
    charAmount.innerHTML = wordBox.value.length
    wordAmount.innerHTML = wordBox.value.split(/\s+/).length -1

}


