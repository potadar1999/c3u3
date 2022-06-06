
  var user=JSON.parse(localStorage.getItem("user"))
  // console.log(user)
  display(user)
  function display(user){
    user.forEach(function(el){
      var box=document.createElement("div")
    box.setAttribute("id","box")

    var p1=document.createElement("p")
    p1.innerText="Buy Vouchers"


    var price= document.createElement("p")
    price.innerText=el.Amount

    var p2=document.createElement("p")
    p2.innerText="voucher"

  
  
    box.append(p1,price,p2)

    document.querySelector("#wallet_balance").append(box)

    })
  }

 
   
  async function getData(){

    var container=document.querySelector("#voucher_list")

    let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
    // console.log(url)

    let res = await fetch(url)

     let data=await res.json()

     console.log(data)
   append(data)
   
  }
  getData()

  function append(data){
    // var container=document.querySelector("#voucher_list")
    // container.innerHTML=null

    data.forEach(function(el){

      let div=document.createElement("div")

      let p1=document.createElement("p");
      p1.innerText=el.vouchers.name

      let img=document.createElement("img")
      img.setAttribute("src",el.vouchers.image)
      

      let p2=document.createElement("p");
      p2.innerText=el.vouchers.price

      div.append(p1,img,p2)

      document.querySelector("#voucher_list").append(div)


      var btn=document.querySelector(".buy_voucher")
      btn.innerText="BUY"
      btn.addEventListener("click",function(){
        addrow(el)
      })


    })
  }

  function addrow(el){
    localStorage.setItem("purchases",JSON.stringify("purchase"))
    window.location.href="purchase.html"
  }
  
  

  