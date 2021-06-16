const toggle = document.querySelector(".toggle");
        const menu = document.querySelector(".menu");

        function toggleMenu() {
            if(menu.classList.contains("active")){
                menu.classList.remove("active");
                toggle.classList.remove("active");
                // document.querySelector(".menu").style.display = "none";

                // document.querySelector(".cta-text").classList.remove("show-none");
            } else {
                menu.classList.add("active");
                toggle.classList.add("active");
                document.querySelector(".menu").style.display = "block";
                // document.querySelector(".menu-menu-principal-container").style.display = "flex";
                // document.querySelector(".cta-text").classList.add("show-none");
            }
        }

        toggle.addEventListener("click", toggleMenu, false);

        const items = document.querySelectorAll(".item");

        function toggleItem() {
            if(this.classList.contains("submenu-active")){
                this.classList.remove("submenu-active");
            } else if(menu.querySelector(".submenu-active")){
                menu.querySelector(".submenu-active").classList.remove("submenu-active");
                this.classList.add("submenu-active");
            } else {
                this.classList.add("submenu-active");
            }
        }

        for(let item of items) {
            if (item.querySelector(".sub-menu")) {
                item.addEventListener("click", toggleItem, false);
                item.addEventListener("keypress", toggleItem, false);
            }
        }

        function closeSubmenu(e){
            let isClickInside = menu.contains(e.target);
            if(!isClickInside && menu.querySelector(".submenu-active")){
                menu.querySelector(".submenu-active").classList.remove("submenu-active");
            }
        }

        document.addEventListener("click", closeSubmenu, false);

        function toggleForm(element) {
            var contactForm = document.querySelector(".contact-form");
            var jobForm = document.querySelector(".job-form");
            // console.log("Contact form: "+element.target.classList.contains("contact"));
            // console.log("Job form: "+jobForm);
            // element.preventDefault();
            if (element.target.classList.contains("contact")) {
                contactForm.style.display = "block";
                jobForm.style.display = "none";
            } else if (element.target.classList.contains("job")){
                contactForm.style.display = "none";
                jobForm.style.display = "block";
            } else {
                if (element.target.getAttribute("type") === "reset") {
                    document.forms[0].reset();
                    document.forms[1].reset();
                }
            }
           
        }

        document.addEventListener("click", toggleForm, false);

        function closeForm(element) {
            var contactForm = document.querySelector(".contact-form");
            var jobForm = document.querySelector(".job-form");
            // element.preventDefault();
            if (element.target.getAttribute("type") === "reset") {
                contactForm.style.display = "none";
                document.forms[0].reset();
                jobForm.style.display = "none";
                document.forms[1].reset();
            } 
        }

        document.addEventListener("click", closeForm, false);