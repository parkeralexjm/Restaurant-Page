import './style.css';
import displayHome from './home';
import displayInfo from './info';
import displayMenu from './menu';

function clearall() {
    const content = document.getElementById("content")
    content.innerHTML = ""
}

function clearHome() {
    clearall();
    displayHome();
}

function clearMenu() {
    clearall();
    displayMenu();
}

function clearInfo() {
    clearall();
    displayInfo();
}

function component() {
    const navBar = document.getElementById('navBar')
    const navul = document.createElement('ul')
    navul.classList.add("navul")
    const listHome = document.createElement('li')
    listHome.textContent = "Home"
    listHome.id = 'listHome'
    listHome.classList.add("navli")
    listHome.addEventListener("click", clearHome)
    const listMenu = document.createElement('li')
    listMenu.textContent = "Menu"
    listMenu.id = 'listMenu'
    listMenu.classList.add("navli")
    listMenu.addEventListener("click", clearMenu)
    const listInfo = document.createElement('li')
    listInfo.textContent = "Info"
    listInfo.id = 'listInfo'
    listInfo.classList.add("navli")
    listInfo.addEventListener("click", clearInfo)

    // Break, make sure you add click functions to the list elementsr

    navul.append(listHome, listMenu, listInfo)
    navBar.append(navul)
}

component();
displayHome();

console.log("index.js loaded correctly")