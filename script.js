// ===============================
// NAVBAR NAVIGATION
// ===============================

const navIcons = document.querySelectorAll(".nav-icon");

navIcons.forEach((icon) => {

    icon.addEventListener("click", (e) => {

        e.preventDefault();

        const navName = icon.dataset.name;


        // ===============================
        // HOME
        // ===============================

        if (navName === "home") {

            console.log("Home clicked");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }


        // ===============================
        // CATEGORIES
        // ===============================

        else if (navName === "categories") {

            console.log("Categories clicked");

            showCategories();

        }


        // ===============================
        // FEEDBACK
        // ===============================

        else if (navName === "feedback") {

            console.log("Feedback clicked");

            const reviewSection =
                document.querySelector(".review-section");

            if (reviewSection) {

                reviewSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }


        // ===============================
        // LOGIN
        // ===============================

        else if (navName === "login") {

            console.log("Login clicked");

            const loginSection =
                document.getElementById("loginSection");

            const joinSection =
                document.querySelector(".join-section");


            if (joinSection) {

                joinSection.classList.add("join-hide");

            }


            setTimeout(() => {

                if (loginSection) {

                    loginSection.classList.add("login-show");

                    loginSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 500);

        }


        // ===============================
        // CART
        // ===============================

        else if (navName === "cart") {

            console.log("Cart clicked");

            const cartSection =
                document.getElementById("cart");

            if (cartSection) {

                cartSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            } else {

                console.log("Cart section not created yet.");

            }

        }

    });

});



// ===============================
// SHOW CATEGORIES
// ===============================

function showCategories() {

    // যদি আগে থেকেই menu থাকে
    // তাহলে menu remove করবে

    const oldMenu =
        document.querySelector(".category-menu");

    if (oldMenu) {

        oldMenu.remove();

        return;

    }


    // ===============================
    // CATEGORY MENU CREATE
    // ===============================

    const categoryMenu =
        document.createElement("div");

    categoryMenu.className = "category-menu";


    // ===============================
    // ALL CATEGORIES
    // ===============================

    const categories = [

        {
            name: "Headphones",
            target: "headphones"
        },

        {
            name: "Joystick",
            target: "joyestic"
        },

        {
            name: "Keyboard",
            target: "keyboard"
        },

        {
            name: "Mouse",
            target: "mouse"
        },

        {
            name: "Watch",
            target: "watch"
        },

        {
            name: "Smart Watch",
            target: "smart-watch"
        },

        {
            name: "Air Buds",
            target: "ear-buds"
        },

        {
            name: "Sound Box",
            target: "sound-box"
        }

    ];


    // ===============================
    // CREATE CATEGORY BUTTONS
    // ===============================

    categories.forEach((category) => {

        const button =
            document.createElement("button");


        button.textContent =
            category.name;


        button.className =
            "category-item";


        // ===============================
        // CATEGORY CLICK
        // ===============================

        button.addEventListener("click", () => {

            const section =
                document.getElementById(category.target);


            if (section) {

                section.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            } else {

                console.log(
                    "Section not found:",
                    category.target
                );

            }


            // Menu remove
            categoryMenu.remove();

        });


        // Button menu-এর মধ্যে যোগ
        categoryMenu.appendChild(button);

    });


    // ===============================
    // ADD MENU TO NAVBAR
    // ===============================

    const categoriesIcon =
        document.querySelector(
            '[data-name="categories"]'
        );


    if (categoriesIcon) {

        categoriesIcon.parentElement.appendChild(
            categoryMenu
        );

    } else {

        console.log(
            "Categories icon not found."
        );

    }

}