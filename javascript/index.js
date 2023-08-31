let bottons = document.querySelectorAll(".bottons li");
let boxs = document.querySelectorAll(".main-box");
// Add event listeners for image buttons
bottons.forEach((botton) => {
  botton.addEventListener("click",handleActive);
  botton.addEventListener("click",handleBox);
});

// Update active state of buttons
function handleActive()  {
  bottons.forEach((botton) => {
    botton.classList.remove("active");
    this.classList.add("active");
  });
};
// Change displayed box
function handleBox(){
    boxs.forEach((box)=>{
        box.style.display="none";
    })
    document.querySelectorAll(this.dataset.filter).forEach((element)=>{
        element.style.display = "flex";
    })
}