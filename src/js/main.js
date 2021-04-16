var dragItem = document.querySelector("#item");
var container = document.querySelector("#container");
var dragItem1 = document.querySelector("#item1");

function languageMode() {
    container.addEventListener('click', function(e) {
        let className = container.classList[0];
        if (className == 'select-left') {
            container.classList.remove('select-left');
            container.classList.add('select-right');
            dragItem.classList.remove('item-left');
            dragItem.classList.add('item-right');
        }
        if (className == 'select-right') {
            container.classList.remove('select-right');
            container.classList.add('select-left');
            dragItem.classList.remove('item-right');
            dragItem.classList.add('item-left');
        }
    })

    // container1.addEventListener('click', function(e) {
    //     let className = container1.classList[0];
    //     if (className == 'select-left') {
    //         // document.getElementById("menu1").style.display = "block";
    //         container1.classList.remove('select-left');
    //         container1.classList.add('select-right');
    //         dragItem1.classList.remove('item-left');
    //         dragItem1.classList.add('item-right');
    //     }
    //     if (className == 'select-right') {
    //         container1.classList.remove('select-right');
    //         container1.classList.add('select-left');
    //         dragItem1.classList.remove('item-right');
    //         dragItem1.classList.add('item-left');
    //     }
    // })

}
languageMode();



function menuDot(page) {
    if (page == 'index.html') {
        document.getElementById("home").classList.add('active')
    } else if (page == 'about.html') {
        document.getElementById("about").classList.add('active')
    } else if (page == 'contact.html') {
        document.getElementById("contact").classList.add('active')
    } else if (page = "products.html") {
        document.getElementById("ourproduct").classList.add('active')
    } else {
        document.getElementById("home").classList.add('active')
    }
}

function checkDot() {
    let arr = window.location.href.split('/');
    let page = arr[arr.length - 1];
    console.log(page);
    menuDot(page)

}
checkDot();

function toogleMenu() {
    let menuButton = document.querySelector(".menubar");
    let menu = document.querySelector(".header_menu");
    let body = document.getElementsByTagName("body")[0];

    menuButton.addEventListener("click", () => {
        menu.classList.toggle('set-width');
        if (!menu.classList.contains('set-width')) {
            body.style.backgroundColor = "#ffffff"
        } else {
            body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        };
    });
    window.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
            menu.classList.remove('set-width');
            body.style.backgroundColor = "#ffffff"
        }
    })
}
toogleMenu();