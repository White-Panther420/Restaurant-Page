import { createAnElement, createAnImg } from "./homePage"
import "./Styles/AboutUsPage.css"
import ExcellenceImg from "./Assets/Excellence.jpg"
import Steak from './Assets/Steak.jpeg'
import Service from "./Assets/Service.jpg"
const loadAboutUsPage = ()=>{
    const aboutContent = createAnElement("div", "aboutContent")

    //Secion 1: Welcome message
    const missionStmtDiv = createAnElement("div", "missionStmtDiv")
    const missionStmtHeader = createAnElement("h2", "missionStmtHeader")
    missionStmtHeader.textContent = "WELCOME TO HADDISON STEAKHOUSE!"
    missionStmtDiv.appendChild(missionStmtHeader)
    const missionstmtP = createAnElement("p", "missionstmtP")
    missionstmtP.textContent = "At Haddison Steakhouse, our mission is to create an extraordinary dining experience that transcends the ordinary. We are dedicated to crafting the perfect balance between delectable cuisine, impeccable service, and a refined ambiance. Our commitment to excellence is evident in every detail, from the sourcing of the finest ingredients to the artful presentation of each dish. We strive to exceed our guests' expectations, leaving a lasting impression of culinary mastery and genuine hospitality. With unwavering passion and attention to detail, we aim to be the premier destination for steak lovers, where memories are made, and moments are savored."
    missionStmtDiv.appendChild(missionstmtP)

    //Section 2: Our Comitement to Excellence message
    const excellenceContentDiv = createAnElement("div", "excellenceContentDiv")
    const excellenceContentTextDiv = createAnElement("div", "excellenceContentTextDiv")
    excellenceContentDiv.appendChild(excellenceContentTextDiv)
    const excellenceContentImgDiv = createAnElement("div", "excellenceContentImgDiv")
    excellenceContentDiv.appendChild(excellenceContentImgDiv)

    const excellenceContentheader = createAnElement("h3", "excellenceContentheader")
    excellenceContentheader.textContent = "Our Commitment to Excellence"
    excellenceContentTextDiv.appendChild(excellenceContentheader)
    const excellenceContentP = createAnElement("p", "excellenceContentP")
    excellenceContentP.textContent = "At Haddison Steakhouse, we are committed to delivering the highest standards of excellence in every aspect of your dining experience. From the carefully selected ingredients to the skillful preparation of our dishes, we strive to create a culinary masterpiece with each and every plate. Our team of expert chefs, sommeliers, and staff are passionate about their craft, ensuring that every detail is meticulously executed to perfection."
    const excellenceContentP2 = createAnElement("p", "savoryContentP")
    excellenceContentP2.textContent = "Our team of expert chefs approaches each dish with artistry and precision. They skillfully transform these premium ingredients into culinary masterpieces, showcasing the natural flavors and textures while adding their own creative touches. From the carefully marbled steaks to the handcrafted sauces and sides, every plate that leaves our kitchen is a testament to the craftsmanship and attention to detail that defines Haddison Steakhouse."
    const excellenceContentP3 = createAnElement("p", "savoryContentP")
    excellenceContentP3.textContent = "But it's not just about the food. We believe that exceptional service is the cornerstone of a truly memorable dining experience. Our highly trained staff possesses an in-depth knowledge of our menu and wine selection, allowing them to guide and enhance your dining journey. They are attentive, intuitive, and genuinely passionate about ensuring your comfort and satisfaction. Whether it's a special dietary request, a recommendation for the perfect wine pairing, or simply a warm smile, our team is committed to going above and beyond to make your visit extraordinary.    "
    excellenceContentTextDiv.appendChild(excellenceContentP)
    excellenceContentTextDiv.appendChild(excellenceContentP2)
    excellenceContentTextDiv.appendChild(excellenceContentP3)

    const excellenceContentImg = createAnImg(ExcellenceImg, "excellenceContentImg")
    excellenceContentImgDiv.appendChild(excellenceContentImg)

    //Section 3: Savory and Delectable Steaks message
    const savoryContentDiv = createAnElement("div", "savoryContentDiv")
    const savoryContentImgDiv = createAnElement("div", "savoryContentImgDiv")
    savoryContentDiv.appendChild(savoryContentImgDiv)
    const savoryContentTextDiv = createAnElement("div", "savoryContentTextDiv")
    savoryContentDiv.appendChild(savoryContentTextDiv)

    const savoryContentHeader = createAnElement("h3", "savoryContentHeader")
    savoryContentHeader.textContent = "Savory and Delectable Steaks"
    savoryContentTextDiv.appendChild(savoryContentHeader)
    const savoryContentP = createAnElement("p", "savoryContentP")
    savoryContentP.textContent = "At Haddison Steakhouse, we are committed to delivering the highest standards of excellence in every aspect of your dining experience. From the carefully selected ingredients to the skillful preparation of our dishes, we strive to create a culinary masterpiece with each and every plate. Our team of expert chefs, sommeliers, and staff are passionate about their craft, ensuring that every detail is meticulously executed to perfection."
    const savoryContentP2 = createAnElement("p", "savoryContentP")
    savoryContentP2.textContent = "Our steaks are meticulously aged to perfection, allowing the natural enzymes to tenderize the meat and enhance its depth of flavor. From the rich marbling of a beautifully marbled ribeye to the velvety tenderness of a perfectly cooked filet mignon, each bite is a testament to the superior quality of our beef. Our expert chefs meticulously prepare each steak to your desired level of doneness, ensuring a succulent and mouthwatering experience every time.    "
    const savoryContentP3 = createAnElement("p", "savoryContentP")
    savoryContentP3.textContent = "To complement our exceptional steaks, we offer a range of delectable house-made sauces and flavor-enhancing accompaniments. Whether you prefer a classic Béarnaise or a tangy Chimichurri, our sauces are carefully crafted to elevate the flavors of our steaks without overpowering them. Additionally, our thoughtfully curated wine list features a selection of varietals from around the world, expertly chosen to pair harmoniously with our steaks, enhancing the overall dining experience.    "
    savoryContentTextDiv.appendChild(savoryContentP)
    savoryContentTextDiv.appendChild(savoryContentP2)
    savoryContentTextDiv.appendChild(savoryContentP3)
    const savoryContentImg = createAnImg(Steak, "excellenceContentImg")
    savoryContentImgDiv.appendChild(savoryContentImg)

    //Section 4: Impeccable Service message
    const serviceContentDiv = createAnElement("div", "serviceContentDiv")
    const serviceImgDiv = createAnElement("div", "serviceImgDiv")
    serviceContentDiv.appendChild(serviceImgDiv)
    const serviceImg = createAnImg(Service, "serviceImg")
    serviceContentDiv.appendChild(serviceImg)
    const outterServiceTextContentDiv = createAnElement("div", "outterServiceTextContentDiv")
    serviceContentDiv.appendChild(outterServiceTextContentDiv)
    const serviceTextContentDiv = createAnElement("div", "serviceTextContentDiv")
    outterServiceTextContentDiv.appendChild(serviceTextContentDiv)

    const serviceTextHeader = createAnElement('h2', "serviceTextHeader")
    serviceTextHeader.textContent = "IMPECCABLE SERVICE"
    serviceTextContentDiv.appendChild(serviceTextHeader)
    const serviceTextP = createAnElement("p", "serviceTextP")
    serviceTextP.textContent = "At Haddison Steakhouse, we believe that impeccable service is the cornerstone of a truly exceptional dining experience. Our highly trained and knowledgeable staff are dedicated to anticipating your every need, providing attentive service that is both professional and personable. From the moment you arrive to the moment you leave, our team is committed to ensuring that your visit is seamless, memorable, and exceeds your expectations."
    serviceTextContentDiv.appendChild(serviceTextP)
    const customerReviewP = createAnElement("p", "customerReviewP")
    customerReviewP.textContent = "\"I recently had the pleasure of dining at Haddison Steakhouse, and I cannot praise it enough. From the moment I walked in, I was greeted with warmth and hospitality. The service was exceptional, with the staff going above and beyond to ensure that every aspect of my dining experience was perfect.\""
    serviceTextContentDiv.appendChild(customerReviewP)
    const customerName = createAnElement("div", "customerName")
    customerName.textContent = "-John Doe"
    serviceTextContentDiv.appendChild(customerName)

    aboutContent.appendChild(missionStmtDiv)
    aboutContent.appendChild(excellenceContentDiv)
    aboutContent.appendChild(savoryContentDiv)
    aboutContent.appendChild(serviceContentDiv)
    return aboutContent
}

export{
    loadAboutUsPage
}
