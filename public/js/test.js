document.querySelector("#loginBtn").addEventListener("click", function () {
  fetch('/login', {
    method: 'POST'
  })
    .then(res => res.json())
    .then(response => {
      console.log(response)
    })
})

document.querySelector("#logoutBtn").addEventListener("click", function () {
  fetch('/logout', {
    method: 'POST'
  })
    .then(() => {
      console.log("You are logged out!")
    })
})