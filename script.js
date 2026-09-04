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

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }


        // ===============================
        // CATEGORIES
        // ===============================

        else if (navName === "categories") {

            showCategories();

        }


        // ===============================
        // FEEDBACK
        // ===============================

        else if (navName === "feedback") {

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

            const loginSection =
                document.getElementById("loginSection");

            const joinSection =
                document.querySelector(".join-section");

            const createAccountSection =
                document.getElementById("createAccountSection");


            // Join section hide
            if (joinSection) {

                joinSection.classList.add("join-hide");

            }


            // Create account hide
            if (createAccountSection) {

                createAccountSection.classList.remove("show-create");
                createAccountSection.classList.remove("create-show");

            }


            // Login show
            if (loginSection) {

                loginSection.classList.add("show-login");
                loginSection.classList.add("login-show");

                setTimeout(() => {

                    loginSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 100);

            }

        }


        // ===============================
        // CART
        // ===============================

        else if (navName === "cart") {

            const cartSection =
                document.getElementById("cart");

            if (cartSection) {

                cartSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            } else {

                console.log("Cart section not found.");

            }

        }

    });

});



// ===============================
// SHOW CATEGORIES
// ===============================

function showCategories() {

    // Old menu থাকলে remove
    const oldMenu =
        document.querySelector(".category-menu");

    if (oldMenu) {

        oldMenu.remove();

        return;

    }


    // ===============================
    // CREATE CATEGORY MENU
    // ===============================

    const categoryMenu =
        document.createElement("div");

    categoryMenu.className = "category-menu";


    // ===============================
    // CATEGORIES
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
    // CREATE BUTTONS
    // ===============================

    categories.forEach((category) => {

        const button =
            document.createElement("button");

        button.textContent =
            category.name;

        button.className =
            "category-item";


        // Category click
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

        console.log("Categories icon not found.");

    }

}



// ==================================================
// JOIN / LOGIN / CREATE ACCOUNT
// ==================================================


// ===============================
// GET ELEMENTS
// ===============================

const joinBtn =
    document.getElementById("joinBtn");

const loginSection =
    document.getElementById("loginSection");

const createAccountSection =
    document.getElementById("createAccountSection");

const createAccountBtn =
    document.getElementById("createAccountBtn");

const backToLoginBtn =
    document.getElementById("backToLoginBtn");



// ===============================
// JOIN NOW → LOGIN
// ===============================

if (joinBtn) {

    joinBtn.addEventListener("click", () => {

        console.log("JOIN NOW clicked");


        // Join section
        const joinSection =
            document.querySelector(".join-section");


        // Join section hide
        if (joinSection) {

            joinSection.classList.add("join-hide");

        }


        // Create account hide
        if (createAccountSection) {

            createAccountSection.classList.remove(
                "show-create"
            );

            createAccountSection.classList.remove(
                "create-show"
            );

        }


        // Login show
        if (loginSection) {

            setTimeout(() => {

                loginSection.classList.add(
                    "show-login"
                );

                loginSection.classList.add(
                    "login-show"
                );


                loginSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 500);

        }

    });

}



// ===============================
// LOGIN → CREATE ACCOUNT
// ===============================

if (createAccountBtn) {

    createAccountBtn.addEventListener("click", () => {

        console.log("CREATE ACCOUNT clicked");


        // Login hide
        if (loginSection) {

            loginSection.classList.remove(
                "show-login"
            );

            loginSection.classList.remove(
                "login-show"
            );

        }


        // Create account show
        if (createAccountSection) {

            createAccountSection.classList.add(
                "show-create"
            );

            createAccountSection.classList.add(
                "create-show"
            );


            createAccountSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}



// ===============================
// CREATE ACCOUNT → LOGIN
// ===============================

if (backToLoginBtn) {

    backToLoginBtn.addEventListener("click", () => {

        console.log("BACK TO LOGIN clicked");


        // Create account hide
        if (createAccountSection) {

            createAccountSection.classList.remove(
                "show-create"
            );

            createAccountSection.classList.remove(
                "create-show"
            );

        }


        // Login show
        if (loginSection) {

            loginSection.classList.add(
                "show-login"
            );

            loginSection.classList.add(
                "login-show"
            );


            loginSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}



// ===============================
// LOGIN FORM
// ===============================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value.trim();


        if (email === "" || password === "") {

            alert("Please fill all fields.");

            return;

        }


        alert("Login successful! 🎉");

    });

}



// ===============================
// CREATE ACCOUNT FORM
// ===============================

const createAccountForm =
    document.getElementById("createAccountForm");

if (createAccountForm) {

    createAccountForm.addEventListener("submit", (e) => {

        e.preventDefault();


        const name =
            document.getElementById("createName").value.trim();

        const email =
            document.getElementById("createEmail").value.trim();

        const password =
            document.getElementById("createPassword").value.trim();

        const confirmPassword =
            document.getElementById("confirmPassword").value.trim();


        // Empty field check
        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill all fields.");

            return;

        }


        // Password check
        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }


        alert("Account created successfully! 🎉");

    });

}