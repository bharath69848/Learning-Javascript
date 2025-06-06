const input = document.getElementById("input")
const output = document.getElementById("output")

function reverse(str){
    const list = str.split("")
    return list.reverse().join("")
}

function palindrome(){
    value = input.value
    back = reverse(value)
    input.value = ""
    if (back === value){
        output.innerHTML = "PALINDROME"
    }
    else{
        output.innerHTML = "NOT A PALINDROME"
    }
}