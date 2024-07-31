const filterAddUser = async(name) => 
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json())


let time = null
function handleKeyUpPrincipal(event){
    
    clearTimeout(time)

    time = setTimeout(() =>{
        filterAddUser(event.target.value)
        .then(users => console.log(users))
    }, 1000)
}

document.querySelector("input")
.addEventListener("keyup", handleKeyUpPrincipal)