function Length(len){

    if(len.length < 10){
        return `Length less then 10`
    } else {
        return `You have more then 10`
    }

}

console.log(Length("Ж"))

//to uppercase or lowercase

function makeBIGandLEss(w) {

    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
}

console.log(makeBIGandLEss("хуйпопа"))

function find(a){
    
    if(a.includes("a")){
        return a.indexOf("a")
    }

}

console.log(find("rbbbaabra"))


function include(word){

    if(word.includes("apple").toUpperCase()) return  `Fuck yourself`

}

console.log(include("Apple"))