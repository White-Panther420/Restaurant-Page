import { loadHomePage, createAnElement, createButtons, createAnImg } from "./homePage.js"
import { loadAboutUsPage } from "./aboutPage.js"
import { loadMenuPage } from "./menuPage.js"
import LocationMap from './Assets/Map.png'
import FaceBookIcon from "./Assets/Facebook.png"
import InstagramIcon from "./Assets/Instagram.png"
import YelpIcon from "./Assets/Yelp.png"
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
                navButtons.forEach(btn =>{
                    btn.classList.remove("clickedBtn")
                })
                changePage(loadHomePage, btn)
                break;
            case "ABOUT":
                navButtons.forEach(btn =>{
                    btn.classList.remove("clickedBtn")
                })
                changePage(loadAboutUsPage, btn)
                break;
            case "MENU":
                navButtons.forEach(btn =>{
                    btn.classList.remove("clickedBtn")
                })
                changePage(loadMenuPage, btn)
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

//Location, contact, and footer stuff
const actionLocationContactDiv = createAnElement("div", "actionLocationContactDiv")
const actionStmtDiv = createAnElement("div", "actionStmtDiv")
actionLocationContactDiv.appendChild(actionStmtDiv)
const actionStmtP = createAnElement("h2", "actionStmtP")
actionStmtP.textContent = "Savor perfection at Haddison Steakhouse - reserve your table today!"
actionStmtDiv.appendChild(actionStmtP)

const locationAndContactDiv = createAnElement("div", "locationAndContactDiv")
const locationInfoDiv = createAnElement("div", "locationInfoDiv")
locationAndContactDiv.appendChild(locationInfoDiv)
actionLocationContactDiv.appendChild(locationAndContactDiv)

const locationHeaderDiv = createAnElement("div", "locationHeaderDiv")
const locationHeader = createAnElement("h2", "locationHeader")
locationHeader.textContent = "Our Location"
locationHeaderDiv.appendChild(locationHeader)
const locationMapDiv = createAnElement("div", "mapDiv")
const locationMap = createAnImg(LocationMap, "map")
locationMapDiv.appendChild(locationMap)
const locationPDiv = createAnElement("div", "locationPDiv")
const locationP1 = createAnElement("p", "LocationP")
locationP1.textContent = "5101 N 44th St."
const locationP2 = createAnElement("p", "LocationP")
locationP2.textContent = "Phoenix, AZ 85018"
locationPDiv.appendChild(locationP1)
locationPDiv.appendChild(locationP2)

locationInfoDiv.appendChild(locationHeaderDiv)
locationInfoDiv.appendChild(locationMapDiv)
locationInfoDiv.appendChild(locationPDiv)

const contactInfoDiv = createAnElement("div", "contactInfoDiv")
locationAndContactDiv.appendChild(contactInfoDiv)
const contactInfoHeader = createAnElement("h2", "contactInfoHeader")
contactInfoHeader.textContent = "Contact Us"
const contactPhoneNumber = createAnElement("p", "contactInfo")
contactPhoneNumber.textContent = "Call 555-555-5555 to make a reservation"
const contactEmail = createAnElement("p", "contactInfo")
contactEmail.textContent = "Or email us at Haddison.Stk@gmail.com"

const socialIconsDiv = createAnElement("div", "socialIconsDiv")
const faceBookIcon = createAnImg(FaceBookIcon, "socialIcon")
const instagramIcon = createAnImg(InstagramIcon, "socialIcon")
const yelpIcon = createAnImg(YelpIcon, "socialIcon")
socialIconsDiv.appendChild(faceBookIcon)
socialIconsDiv.appendChild(instagramIcon)
socialIconsDiv.appendChild(yelpIcon)

contactInfoDiv.appendChild(contactInfoHeader)
contactInfoDiv.appendChild(contactPhoneNumber)
contactInfoDiv.appendChild(contactEmail)    
contactInfoDiv.appendChild(socialIconsDiv)
    
const footer = createAnElement("footer", "footer")
const footerP = createAnElement("p", "footerP")
footerP.textContent = "Copyright @ 2023 The Odin Project"
footer.appendChild(footerP)

content.appendChild(actionLocationContactDiv)
content.appendChild(footer)

const changePage = (functionName, btn) => {
    btn.classList.add("clickedBtn")
    content.removeChild(pageBodyContent)
    pageBodyContent = functionName()
    content.insertBefore(pageBodyContent, actionLocationContactDiv)
    window.scrollTo(0, 0);
}













