import { loadHomePage, createAnElement, createButtons } from "./homePage.js"
const content = document.querySelector("#content")
//Nav bar stuff
const navBar = createAnElement("div", "navBarDiv")

const leftNavOptions = ["Home", "About", "Menu"]
const rightNavOptions = ["Location", "Hours", "Contact"]
let leftNav = createButtons(leftNavOptions, "navBarOptions")
let rightNav = createButtons(rightNavOptions, "navBarOptions")

const leftNavDiv = createAnElement("div", "navBarUlDiv")
leftNavDiv.appendChild(leftNav)
const rightNavDiv = createAnElement("div", "navBarUlDiv")
rightNavDiv.appendChild(rightNav)

const restaurantName = createAnElement("div", "restaurantTitle")
restaurantName.textContent = 'Haddison Steakhouse'

navBar.appendChild(leftNavDiv)
navBar.appendChild(restaurantName)
navBar.appendChild(rightNavDiv)
content.appendChild(navBar)

//Load home page on first visit
let pageBodyContent = loadHomePage()
content.appendChild(pageBodyContent)

const navButtons = document.querySelectorAll(".navBtn")
navButtons.forEach(btn => {
    btn.addEventListener("click", () =>{
        switch(btn.textContent.toUpperCase()){
            case "HOME":
                //pageBodyContent.textContent = " "
                pageBodyContent = loadHomePage()
                break;
            case "ABOUT":
                //content.textContent
                console.log("GOOOD")
                break;
            case "MENU":
                console.log("YUMMY")
                break;
            case "LOCATION":
                console.log("HHHIIII")
                break;
            case "HOURS":
                console.log("UWU")
                break;
            case "CONTACT":
                console.log("YIKES")
                break;
            default:
                break;
        }
    })
});















