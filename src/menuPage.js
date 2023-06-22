import { createAnElement, createAnImg } from "./homePage"
import "./Styles/MenuPage.css"
const loadMenuPage = () =>{
    const menuContent = createAnElement("div", "menuContent")

    const menuTitle = createAnElement("h2", "menuTitle")
    menuTitle.textContent = "Our Menu"

    const menuDiv = createAnElement("div", "menuDiv")
    const appetizerSection = createAnElement("div", "appetizerSection")
    menuDiv.appendChild(appetizerSection)
    
    const appetizerHeader = createAnElement("h3", "MenuSectionHeader")
    appetizerHeader.textContent = "APPETIZERS"
    appetizerSection.appendChild(appetizerHeader)
    const appetizerNames = [
        "Truffle Infused Shrimp Skewers. . . . . . $12",
        "Caprese Bruschetta. . . . . . . . . . . . . . . . $10",
        "Lobster Bisque Shooter. . . . . . . . . . . . . . $14",
        "Beef Carpaccio Crostini. . . . . . . . . . . . . .$16"
    ]
    const appetizerDescriptions = [
        "Succulent jumbo shrimp, delicately seasoned and skewered, grilled to perfection and infused with the rich flavors of truffle. Served with a tangy citrus dipping sauce.",
        "A delightful twist on a classic favorite, featuring toasted artisan bread topped with fresh mozzarella, ripe tomatoes, and fragrant basil. Drizzled with balsamic reduction for a burst of tangy sweetness.",
        "Indulge in the velvety richness of our signature lobster bisque, served in a petite shooter glass for a sophisticated and elegant presentation. A taste of luxury in every sip.",
        "Thinly sliced, melt-in-your-mouth beef tenderloin, marinated in a zesty blend of herbs and spices, served on toasted crostini with a creamy horseradish aioli. A perfect harmony of flavors and textures."
    ]
    for(let i=0; i<appetizerNames.length; i++){
        appetizerSection.appendChild(createMenuItems(appetizerNames[i], appetizerDescriptions[i]))
    }

    const saladSoupSection = createAnElement("div", "saladSoupSection")
    menuDiv.appendChild(saladSoupSection)
    const saladSoupHeader = createAnElement("h3", "MenuSectionHeader")
    saladSoupHeader.textContent = "SALADS & SOUPS"
    saladSoupSection.appendChild(saladSoupHeader)
    const saladsAndSoups = [
        "Caesar Salad. . . . . . . . . . $12",
        "Caprese Salad. . . . . . . . . $14",
        "Greek Salad. . . . . . . . . . $13",
        "Tomato Basil Soup. . . . . . . $10",
        "Lobster Bisque. . . . . . . . . $18",
        "French Onion Soup. . . . . . . $15"
      ];
      const saladSoupDescriptions = [
        "Enjoy a classic Caesar Salad, featuring crisp romaine lettuce, Parmesan cheese, house-made croutons, and our signature Caesar dressing.",
        "Indulge in the fresh flavors of a Caprese Salad, combining vine-ripened tomatoes, creamy mozzarella, fresh basil, and a drizzle of balsamic glaze.",
        "Savor the Mediterranean delight of a Greek Salad, with a mix of crisp lettuce, Kalamata olives, feta cheese, cucumbers, tomatoes, and tangy Greek dressing.",
        "Warm your soul with a comforting bowl of Tomato Basil Soup, made from ripe tomatoes, fresh basil, and a touch of cream. Served with a side of crusty bread.",
        "Delight in the richness of Lobster Bisque, a velvety soup made with tender lobster meat, aromatic spices, and a hint of sherry.",
        "Experience the classic French flavors of French Onion Soup, featuring caramelized onions, savory beef broth, and a layer of melted Gruyere cheese on top."
      ];
      for(let i=0; i<saladsAndSoups.length; i++){
        saladSoupSection.appendChild(createMenuItems(saladsAndSoups[i], saladSoupDescriptions[i]))
    }

    const entreeSection = createAnElement("div", "entreeSection")
    menuDiv.appendChild(entreeSection)
    const entreeHeader = createAnElement("h3", "MenuSectionHeader")
    entreeHeader.textContent = "SAVORY STEAKS"
    entreeSection.appendChild(entreeHeader)
    const entrees = [
        "Pan-Seared Filet Mignon. . . . . . $85",
        "Grilled Lobster Tail. . . . . . . . $95",
        "Braised Lamb Shank. . . . . . . . . $75",
        "Seared Ahi Tuna. . . . . . . . . . $65",
        "Japanese Wagyu Steak. . . . . . . $200",
        "Lobster Thermidor. . . . . . . . . $150",
        "Dry-Aged Tomahawk Ribeye. . . . . $180",
        "Alaskan King Crab Legs. . . . . . $150",
        "White Truffle Pasta. . . . . . . . $100",
        "Caviar Tasting Experience. . . . . $200",
        "Tasting Menu - Chef's Selection. . $180"
      ];
      const descriptions = [
        "Savor the tenderness and flavor of our Pan-Seared Filet Mignon, served with a rich red wine reduction and accompanied by roasted potatoes and seasonal vegetables.",
        "Indulge in the succulent Grilled Lobster Tail, perfectly cooked and served with drawn butter, lemon wedges, and a side of sautéed asparagus.",
        "Enjoy the rich and flavorful Braised Lamb Shank, slow-cooked to perfection in a savory jus and served with mashed potatoes and roasted root vegetables.",
        "Delight in the freshness of Seared Ahi Tuna, served with a zesty soy ginger glaze, accompanied by jasmine rice and stir-fried vegetables.",      
        "Indulge in the epitome of luxury with our Japanese Wagyu Steak, known for its unparalleled marbling and melt-in-your-mouth texture.",
        "Experience the classic French delight of Lobster Thermidor, featuring succulent lobster meat in a rich and creamy brandy-infused sauce.",
        "Sink your teeth into the impressive Dry-Aged Tomahawk Ribeye, a bone-in ribeye steak aged to perfection for enhanced tenderness and flavor.",
        "Enjoy the sweet and delicate meat of Alaskan King Crab Legs, steamed to perfection and served with drawn butter and lemon wedges.",
        "Indulge in the aroma and flavors of our White Truffle Pasta, featuring handmade pasta tossed in a luxurious white truffle cream sauce.",
        "Embark on a gastronomic journey with our Caviar Tasting Experience, showcasing a selection of exquisite caviar paired with traditional accompaniments.",
        "Allow our talented chefs to curate a unique and unforgettable Tasting Menu, presenting a series of artfully crafted dishes that highlight the finest ingredients."
      ];
      for(let i=0; i<entrees.length; i++){
        entreeSection.appendChild(createMenuItems(entrees[i], descriptions[i]))
      }
    
      const drinksSection = createAnElement("div", "drinksSection")
      menuDiv.appendChild(drinksSection)
      const drinksHeader = createAnElement("h3", "MenuSectionHeader")
      drinksHeader.textContent = ("SIGNATURE DRINKS")
      drinksSection.appendChild(drinksHeader)
      const drinkNames = [
          "Seasonal Fruit Infused Water. . . . . Complimentary",
          "Craft Sodas. . . . . . . . . . $6",
          "Haddison's Signature Old Fashioned. . . . $14",
          "Berry Bliss Mocktail. . . . . . . . . . $8",
          "The Haddison Mule. . . . . . . . . . $12"
      ]
      const drinkDescriptions = [
          "Stay refreshed with our complimentary fruit-infused water. Featuring seasonal fruits like citrus, berries, or cucumber for a thirst-quenching and palate-cleansing experience.",
          "Handcrafted sodas made with premium ingredients and natural flavors. Choose from cola, root beer, or sparkling lemon-lime served over ice with a citrus slice.",
          "A timeless twist on the classic cocktail. Top-shelf bourbon, bitters, sugar, and orange zest over ice for a smooth and sophisticated sip.",
          "A refreshing non-alcoholic option bursting with mixed berries, lime juice, and sparkling water. Garnished with mint for a delightful touch.",
          "A modern take on the Moscow Mule. Premium vodka, ginger beer, and lime juice served in a copper mug with lime and mint garnish."
      ]
  
      for(let i=0; i<drinkNames.length; i++){
          drinksSection.appendChild(createMenuItems(drinkNames[i], drinkDescriptions[i]))
      }
    
      const desertSection = createAnElement("div", "desertSection")
      menuDiv.appendChild(desertSection)
      const desertHeader = createAnElement("h3", "MenuSectionHeader")
      desertHeader.textContent = ("DESERTS")
      desertSection.appendChild(desertHeader)
      const dessertNames = [
        "Decadent Chocolate Mousse. . . . . . . . . $12",
        "Classic New York Cheesecake. . . . . . . . $10",
        "Tantalizing Crème Brûlée. . . . . . . . . . . $11",
        "Indulgent Tiramisu. . . . . . . . . . . . . . . . . . $13"
      ];
      const dessertDescriptions = [
        "Immerse yourself in pure chocolate bliss with our Decadent Chocolate Mousse. This velvety smooth dessert features rich, dark chocolate mousse layered with a delicate chocolate sponge, topped with a drizzle of creamy ganache.",
        "Experience the timeless delight of our Classic New York Cheesecake. Made with a buttery graham cracker crust and a lusciously creamy filling, this dessert is served with a choice of fresh fruit compote or a rich berry coulis.",
        "Savor the crackle of caramelized sugar and the creamy custard beneath with our Tantalizing Crème Brûlée. Delicate vanilla bean custard is lovingly torched to create a perfectly caramelized crust, providing a delightful contrast of textures.",
        "Transport yourself to Italy with our Indulgent Tiramisu. Layers of espresso-soaked ladyfingers are interlaced with a velvety mascarpone cream, dusted with cocoa powder, and served with a drizzle of rich chocolate sauce."
      ];
      for(let i=0; i<dessertNames.length; i++){
        desertSection.appendChild(createMenuItems(dessertNames[i], dessertDescriptions[i]))
    }
    
    
    
    
    
    
    
    
    
    
    menuContent.appendChild(menuTitle)
    menuContent.appendChild(menuDiv)
    return menuContent
}

const createMenuItems = (itemName, itemDescription) =>{
    const itemDiv = createAnElement("div", "itemDiv")
    const itemNameAndPrice = createAnElement("p", "itemNameAndPrice")
    itemNameAndPrice.textContent = itemName
    const itemDescr = createAnElement("p", "itemDescr")
    itemDescr.textContent = itemDescription
    itemDiv.appendChild(itemNameAndPrice)
    itemDiv.appendChild(itemDescr)
    return itemDiv
}

export{
    loadMenuPage
} 