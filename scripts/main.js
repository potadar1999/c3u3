var form = document.querySelector("#form")

var user=JSON.parse(localStorage.getItem("user"))||[]

form.addEventListener("submit",function(){

    event.preventDefault()
  
  var data={
    Name:form.name.value,
    Email:form.email.value,
    Address:form.address.value,
    Amount:form.amount.value,
  }
  
 user.push(data)
//  console.log(user)
localStorage.setItem("user",JSON.stringify(user))

})