// Add your code here
/*const nameAndEmail = {
    name: "Marguerite"
    email: "margueriteandreca@gmail.com"
}

*/

function submitData() {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: "Marguerite", email: "margueriteandreca@gmail.com"})
    })
    .then(res => res.json())
    .then(function (data) {
        const p = document.createElement("p");
        p.textContent = data.id
        document.body.appendChild(p)
    })
    .catch(error => {
        console.log(error);
        const ourError = document.createElement("p");
        ourError.textContent = error.message 
        document.body.appendChild(ourError)});
    };
