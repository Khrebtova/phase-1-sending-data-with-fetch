// Add your code here
function submitData(userName, userEmail){
    const user = {
        name: `${userName}`,
        email: `${userEmail}`,
    }
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(user => {
        document.querySelector("body").innerHTML = `${user.id}`        
    })
    .catch((error) => {
        let message = "Unauthorized Access"
        document.querySelector("body").innerHTML = `${error.message} reason: ${message}`
        console.log(error.message)
    })
   }
submitData('Jim', 'jim@jim.com')