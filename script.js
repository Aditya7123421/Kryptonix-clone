

const amazonCards = document.querySelectorAll(".amazoncard");
amazonCards.forEach(card =>{
    const img = card.querySelector(".cardimg img");
    const btn = card.querySelector(".imgbtn1");
    console.log(card);
    console.log(img);
    card.addEventListener("mouseenter", ()=>{
        const txt = btn.querySelector(".imgbtn1_txt");
        img.classList.add("cardimg_hover");
        img.classList.remove("cardimg_leave");
        
        txt.classList.add("change");
        setTimeout(()=>{
            btn.style.backgroundColor = "#e65c2e";
            txt.innerText="Add To Cart";
            txt.classList.remove("change");
        },200); 
    })
    card.addEventListener("mouseleave", ()=>{
        const txt = btn.querySelector(".imgbtn1_txt");
        img.classList.remove("cardimg_hover");
        img.classList.add("cardimg_leave");
        
        txt.classList.add("change");
        setTimeout(()=>{
            btn.style.backgroundColor = "#7FD07E";
            txt.innerText="In Stock";
            txt.classList.remove("change");
        },200);
    });
});


const loginSvg = document.getElementById("login_hover");
const loginPage = document.getElementById("login");
const loginIcon = loginSvg.querySelector("svg");
loginSvg.addEventListener("click", (e) => {
    e.stopPropagation(); 
    if(loginPage.style.visibility === "visible"){
        loginPage.style.visibility = "hidden";  
        loginIcon.classList.remove("orange");
    }
    else{
        loginPage.style.visibility = "visible";
        loginIcon.classList.add("orange");
    }
    
});
loginPage.addEventListener("click", (e) => {
    e.stopPropagation();
});
document.addEventListener("click", () => {
    loginIcon.classList.remove("orange");
    loginPage.style.visibility = "hidden";
});


// Side Panel Logic

const shopBtn = document.getElementById("shopBtn");
const closeBtn = document.getElementById("closeBtn");
const sidePanel = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

shopBtn.addEventListener("click",()=>{
    sidePanel.classList.add("active");
    overlay.classList.add("active");
})
closeBtn.addEventListener("click",()=>{
    sidePanel.classList.remove("active");
    overlay.classList.remove("active");
})

overlay.addEventListener("click",()=>{
    sidePanel.classList.remove("active");
    overlay.classList.remove("active");
})