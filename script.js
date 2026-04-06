
let cart = [];
const amazonCards = document.querySelectorAll(".amazoncard");

function renderCart() {
    const cartContainer = document.querySelector(".sidebar-cart");
    const emptyCart = document.querySelector(".sidebar_empty");
    const sidebarFooter = document.querySelector(".sidebar-footer");
    const subtotalEl = document.querySelector(".subtotal-price");
    cartContainer.innerHTML = "";
    if (cart.length !== 0) {
        emptyCart.classList.add("hidden");
        sidebarFooter.classList.remove("hidden");
        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.innerHTML = `<div class="sidebar_card-img">
                        <img src="${item.img}" alt="product">
                    </div>
                    <div class="flex-column sidebar_card-text">
                        <p>${item.name}</p>
                        <p><span>1 × </span><span>${item.price}</span></p>
                    </div>
                    <button class="sidebar_card-remove_btn">✕</button>`;
            div.classList.add("sidebar_card", "flex");
            div.querySelector(".sidebar_card-remove_btn").addEventListener("click", () => {
                cart.splice(index, 1);
                renderCart();
            });
            cartContainer.appendChild(div);
        });
        const total = cart.reduce((sum, item) => {
            const price = parseFloat(item.price.replace(/[₹,]/g, ""));
            return sum + price;
        }, 0);
        subtotalEl.textContent = `₹${total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

    }
    else {
        emptyCart.classList.remove("hidden");
        sidebarFooter.classList.add("hidden"); 
    }

}

amazonCards.forEach(card => {
    const img = card.querySelector(".cardimg img");
    const btn = card.querySelector(".imgbtn1");

    //Add to cart
    const itemName = card.querySelector(".imgdesc :nth-child(1)");
    const itemPrice = card.querySelector(".imgdesc :nth-child(2)");
    // console.log(itemName);
    // console.log(itemPrice);
    btn.addEventListener("click", () => {
        const alreadyInCart = cart.find(i => i.id === btn.dataset.id);
        if (alreadyInCart) {
            panelShow();
            return;
        }
        const item = {
            id: btn.dataset.id,
            name: itemName.innerHTML,
            img: img.src,
            price: itemPrice.innerHTML
        }
        cart.push(item);
        renderCart();
        panelShow();

    });


    // hover animation effect
    card.addEventListener("mouseenter", () => {
        const txt = btn.querySelector(".imgbtn1_txt");
        img.classList.add("cardimg_hover");
        img.classList.remove("cardimg_leave");

        txt.classList.add("change");
        setTimeout(() => {
            btn.style.backgroundColor = "#e65c2e";
            txt.innerText = "Add To Cart";
            txt.classList.remove("change");
        }, 200);
    })
    card.addEventListener("mouseleave", () => {
        const txt = btn.querySelector(".imgbtn1_txt");
        img.classList.remove("cardimg_hover");
        img.classList.add("cardimg_leave");

        txt.classList.add("change");
        setTimeout(() => {
            btn.style.backgroundColor = "#7FD07E";
            txt.innerText = "In Stock";
            txt.classList.remove("change");
        }, 200);
    });



});


const loginSvg = document.getElementById("login_hover");
const loginPage = document.getElementById("login");
const loginIcon = loginSvg.querySelector("svg");
loginSvg.addEventListener("click", (e) => {
    e.stopPropagation();
    if (loginPage.style.visibility === "visible") {
        loginPage.style.visibility = "hidden";
        loginIcon.classList.remove("orange");
    }
    else {
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

shopBtn.addEventListener("click", panelShow);
closeBtn.addEventListener("click", () => {
    sidePanel.classList.remove("active");
    overlay.classList.remove("active");
})

overlay.addEventListener("click", () => {
    sidePanel.classList.remove("active");
    overlay.classList.remove("active");
})

function panelShow() {
    sidePanel.classList.add("active");
    overlay.classList.add("active");
}