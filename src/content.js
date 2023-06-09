import './Styles/style.css'
import Icon from './Assets/Restaurant.png'
import Steak from './Assets/Steak.jpeg'
import LocationMap from './Assets/Map.png'
const createPageContent = () =>{
    const pageContent = document.createElement('div')
    //Nav bar stuff
    const navBar = createAnElement("div", "navBarDiv")

    const leftNavOptions = ["Home", "About", "Menu"]
    const rightNavOptions = ["Location", "Hours", "Contact"]
    let leftNavUl = createUl(leftNavOptions, "navBarOptions")
    let rightNavUl = createUl(rightNavOptions, "navBarOptions")
    
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
    const restaurantImg = new Image();
    restaurantImg.src = Icon
    restaurantImg.classList.add("restaurantImg")
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
    const steakImg = new Image()
    steakImg.src = Steak
    steakImg.classList.add("steakImg")
    // const restaurantInfoDiv = createAnElement("div", "restaurantInfoDiv")
    // imgAndInfoDiv.appendChild(restaurantInfoDiv)

    const hoursInfoDiv = createAnElement("div", "hoursInfoDiv")
    imgAndInfoDiv.appendChild(hoursInfoDiv)
    const hoursInfoHeader = createAnElement("h2", "hoursInfoHeader")
    hoursInfoHeader.textContent = "Haddison Steakhouse Hours"
    hoursInfoDiv.appendChild(hoursInfoHeader)
    // const seperatorDiv = createAnElement("div", "seperatorDiv")
    // hoursInfoDiv.appendChild(seperatorDiv)
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
    
    const locationAndContactDiv = createAnElement("div", "locationAndContactDiv")
    const locationInfoDiv = createAnElement("div", "locationInfoDiv")
    locationAndContactDiv.appendChild(locationInfoDiv)
    actionLocationContactDiv.appendChild(locationAndContactDiv)

    const locationHeaderDiv = createAnElement("div", "locationHeaderDiv")
    const locationHeader = createAnElement("h2", "locationHeader")
    locationHeader.textContent = "Our Location"
    locationHeaderDiv.appendChild(locationHeader)
    const locationMapDiv = createAnElement("div", "mapDiv")
    const locationMap = new Image()
    locationMap.classList.add("map")
    locationMap.src = LocationMap
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
    contactInfoDiv.appendChild(contactInfoHeader)
    contactInfoDiv.appendChild(contactPhoneNumber)
    contactInfoDiv.appendChild(contactEmail)    
    
    imgAndInfoDiv.appendChild(actionLocationContactDiv)
    
    
    
    
    
    
    
    
    
    
    
    
    
    pageBodyContent.appendChild(imgAndInfoDiv)
    pageContent.appendChild(pageBodyContent)
    return pageContent
}

const createUl = (listItems, className) =>{
    let ulList = document.createElement("ul")
    ulList.classList.add(className)
    for(let i=0; i<listItems.length; i++){
        let liItem = document.createElement("li")
        liItem.textContent = listItems[i]
        ulList.appendChild(liItem)
    }
    return ulList
}

const createAnElement = (elementName, className) =>{
    const element = document.createElement(elementName)
    element.classList.add(className)
    return element
}

export default createPageContent