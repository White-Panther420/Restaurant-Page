import './Styles/style.css'
import Icon from './Assets/Restaurant.png'

const createPageContent = () =>{
    const pageContent = document.createElement('div')
    const navBar = document.createElement("div")
    navBar.classList.add("navBarDiv")

    const leftNavOptions = ["Home", "About", "Menu"]
    const rightNavOptions = ["Location", "Hours", "Contact"]
    let leftNavUl = createUl(leftNavOptions)
    leftNavUl.classList.add("navBarOptions")
    let rightNavUl = createUl(rightNavOptions)
    rightNavUl.classList.add("navBarOptions")
    
    const leftNavDiv = document.createElement("div")
    leftNavDiv.appendChild(leftNavUl)
    leftNavDiv.classList.add("navBarUlDiv")

    const rightNavDiv = document.createElement("div")
    rightNavDiv.appendChild(rightNavUl)
    rightNavDiv.classList.add("navBarUlDiv")

    const restaurantName = document.createElement("h1")
    restaurantName.textContent = 'Haddison Steakhouse'
    restaurantName.classList.add("restaurantTitle")

    navBar.appendChild(leftNavDiv)
    navBar.appendChild(restaurantName)
    navBar.appendChild(rightNavDiv)
    pageContent.appendChild(navBar)

    const restaurantImg = new Image();
    restaurantImg.src = Icon
    restaurantImg.classList.add("restaurantImg")
    pageContent.appendChild(restaurantImg)
    return pageContent
}

const createUl = (listItems) =>{
    let ulList = document.createElement("ul")
    for(let i=0; i<listItems.length; i++){
        let liItem = document.createElement("li")
        liItem.textContent = listItems[i]
        ulList.appendChild(liItem)
    }
    return ulList
}

export default createPageContent