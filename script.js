//selecting  pop notification itm=ems
var popupoverlay = document.querySelector(".popup-overlay")
var addcontent = document.querySelector(".add-textcontent")
var popupaddbutton = document.getElementById("add-popup-btn")

popupaddbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    addcontent.style.display="block"
    addcontent.style.transform="scale(1)" 

})

//select button

var cancelbtn = document.getElementById("popup-cancel")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    addcontent.style.display="none"
})

//selecting book-head, bookname-add , authorname-add , add-book


var bookhead = document.querySelector(".book-head")
var addbook = document.getElementById("add-book")
var booknameadd = document.getElementById("bookname-add")
var authornameadd = document.getElementById("authorname-add")
var textareaadd = document.getElementById("textarea-add")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    addcontent.style.display="none"

    var div = document.createElement("div")
    div.setAttribute("class","book-name")
    div.innerHTML=`
            <h2>${booknameadd.value}</h2>
            <h4>${authornameadd.value}</h4>
            <p>${textareaadd.value}</p>
            <button onclick="removeall(event)" class="dele-para-btn">Delect</button> `
    bookhead.append(div);

});

//delecting books

function removeall(event)
{
    event.target.parentElement.remove()
}








