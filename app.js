const addToCart = document.querySelector("#add");


addToCart.addEventListener("click", addCartBtnHandler);


function addCartBtnHandler (event) {
    event.preventDefault();
    const currentElement = event.target;
 alert("you have purchased successfully!");

}