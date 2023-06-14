import './Styles/style.css'
import Icon from './Assets/Restaurant.png'
import Steak from './Assets/Steak.jpeg'
import LocationMap from './Assets/Map.png'
import FaceBookIcon from "./Assets/Facebook.png"
import InstagramIcon from "./Assets/Instagram.png"
import YelpIcon from "./Assets/Yelp.png"
const createPageContent = () =>{
    const pageContent = createAnElement("div", "pageContent")
    //Nav bar stuff
    const navBar = createAnElement("div", "navBarDiv")

    const leftNavOptions = ["Home", "About", "Menu"]
    const rightNavOptions = ["Location", "Hours", "Contact"]
    let leftNavUl = createButtons(leftNavOptions, "navBarOptions")
    let rightNavUl = createButtons(rightNavOptions, "navBarOptions")
    
    const leftNavDiv = createAnElement("div", "navBarUlDiv")
    leftNavDiv.appendChild(leftNavUl)
    const rightNavDiv = createAnElement("div", "navBarUlDiv")
    rightNavDiv.appendChild(rightNavUl)

    const restaurantName = createAnElement("div", "restaurantTitle")
    restaurantName.textContent = 'Haddison Steakhouse'

    navBar.appendChild(leftNavDiv)
    navBar.appendChild(restaurantName)
    navBar.appendChild(rightNavDiv)
    pageContent.appendChild(navBar)

    //Stuff below nav bar
    const pageBodyContent = createAnElement("div", "pageBodyContent")
    const restaurantImg = createAnImg(Icon, "restaurantImg")
    pageBodyContent.appendChild(restaurantImg)

    const aboutUsContentDiv = createAnElement("div", "aboutUsContentDiv")
    pageBodyContent.appendChild(aboutUsContentDiv)
    const aboutUsHeader = createAnElement('h2', "aboutUsHeader")
    aboutUsHeader.textContent = "A PERFECT DINING EXPERIENCE"
    aboutUsContentDiv.appendChild(aboutUsHeader)

    const aboutUsInfoDiv = createAnElement("div", "aboutUsInfoDiv")
    aboutUsContentDiv.appendChild(aboutUsInfoDiv)
    const aboutUsP1 = createAnElement("p", "aboutUsP")
    aboutUsP1.textContent = "Welcome to Haddison Steakhouse, where passion and precision converge to create extraordinary dining experiences. Our talented chefs meticulously prepare each dish, using only the finest, locally-sourced ingredients for unparalleled flavor and freshness. From perfectly grilled steaks to mouthwatering seafood and delightful vegetarian options, our menu offers a tantalizing array of culinary delights. Step into our elegant dining room, where sophisticated decor sets the stage for a memorable occasion. "
    const aboutUsP2 = createAnElement("p", "aboutUsP")
    aboutUsP2.textContent ="Our attentive staff is dedicated to providing impeccable service, guiding you through our menu and expertly pairing dishes with the perfect wine or craft cocktail. At Haddison Steakhouse, we not only prioritize exceptional cuisine but also sustainability, actively supporting local farmers and employing eco-friendly practices. Join us for an unforgettable dining experience that seamlessly blends exceptional flavors, impeccable service, and a warm ambiance. Book your table today and embark on a culinary journey at Haddison Steakhouse."
    aboutUsInfoDiv.appendChild(aboutUsP1)
    aboutUsInfoDiv.appendChild(aboutUsP2)

    const imgAndInfoDiv = createAnElement("div", "imgAndInfoDiv")
    const steakImg = createAnImg(Steak, "steakImg")

    const hoursInfoDiv = createAnElement("div", "hoursInfoDiv")
    imgAndInfoDiv.appendChild(hoursInfoDiv)
    const hoursInfoHeader = createAnElement("h2", "hoursInfoHeader")
    hoursInfoHeader.textContent = "Haddison Steakhouse Hours"
    hoursInfoDiv.appendChild(hoursInfoHeader)

    const friHoursInfo = createAnElement("p", "HoursInfo")
    friHoursInfo.textContent = "Friday: 6pm - 12am:"
    const satHoursInfo = createAnElement("p", "HoursInfo")
    satHoursInfo.textContent = "Saturday: 6pm - 12am:"
    const sunHoursInfo = createAnElement("p", "HoursInfo")
    sunHoursInfo.textContent = "Sunday: 6pm - 10pm:"
    hoursInfoDiv.appendChild(friHoursInfo)
    hoursInfoDiv.appendChild(satHoursInfo)
    hoursInfoDiv.appendChild(sunHoursInfo)

    imgAndInfoDiv.appendChild(steakImg)

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
    
    pageBodyContent.appendChild(imgAndInfoDiv)
    pageBodyContent.appendChild(actionLocationContactDiv)
    pageBodyContent.appendChild(footer)

    pageContent.appendChild(pageBodyContent)
    return pageContent
}

const createButtons = (buttonTextArray, className) =>{
    const buttonsDiv = createAnElement("div", "buttonsDiv")
    for(let i=0; i<buttonTextArray.length; i++){
        let button = createAnElement("button", "navBtn")
        button.textContent = buttonTextArray[i]
        buttonsDiv.appendChild(button)
    }
    return buttonsDiv
}

const createAnElement = (elementName, className) =>{
    const element = document.createElement(elementName)
    element.classList.add(className)
    return element
}

const createAnImg = (importedImage, className) =>{
    const myImg = new Image()
    myImg.src = importedImage
    myImg.classList.add(className)
    return myImg
}
export default createPageContent