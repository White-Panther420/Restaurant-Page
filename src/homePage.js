import './Styles/HomePage.css'
import Icon from './Assets/Restaurant.png'
import Steak from './Assets/Steak.jpeg'
const loadHomePage = () =>{
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
    pageBodyContent.appendChild(imgAndInfoDiv)
    return pageBodyContent
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
export{
    loadHomePage,
    createAnElement,
    createButtons,
    createAnImg
}