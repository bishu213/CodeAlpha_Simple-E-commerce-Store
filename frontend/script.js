// js for toggle menu
var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px")
            {
                MenuItems.style.maxHeight = "200px"
            }
            else
            {
                MenuItems.style.maxHeight = "0px"
            }
        }



// js for product gallery
var proiductImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function()
{
    proiductImg.src = smallImg[0].src;
}
smallImg[1].onclick = function()
{
    proiductImg.src = smallImg[1].src;
}
smallImg[2].onclick = function()
{
    proiductImg.src = smallImg[2].src;
}
smallImg[3].onclick = function()
{
    proiductImg.src = smallImg[3].src;
}



document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "account.html"; // Redirect to login
    });
  }
});
