const filterAddUser = async (name) =>
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json())

    const debounceEvent = (fn, await = 1000, time) =>  (...args) =>
        clearTimeout(time, time = setTimeout(() => fn(...args), await))
        

function handleKeyUp(event) {
    filterAddUser(event.target.value)
    .then(users => console.log(users.map( user => user.name )))
}

document.querySelector("input")
.addEventListener("keyup", debounceEvent(handleKeyUp, 500))