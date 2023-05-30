let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let search_boxEl = document.querySelector(".search_box")

let recentArray = ["smart watch","mobile","purse"]
form_search.addEventListener("submit",(e)=>{
    e.preventDefault()
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})

function renderRecent() {
    let recent_search_html = ''
    recentArray.forEach(el => {
        recent_search_html += `
        <div class="history">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
        </div>
    `
    })

    search_boxEl.innerHTML = recent_search_html;
}
renderRecent()

/***image_slides ***/

const imageSlides = [
    {
        img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/156452518a7921fb.jpg?q=50",
        link : "https://www.flipkart.com/televisions/~cs-3d6tr1h8cf/pr?sid=ckf%2Cczl&collection-tab-name=Bestsellers+in+TVs&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=hp_bannerads_2_2.bannerAdCard.BANNERADS_._MVT9DTR0FI1B"
    },
    {
        img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/84ae27f93c14a4e3.jpg?q=50",
        link : "https://www.flipkart.com/travel/flights?param=FKDTHPWNOV223AIRLINESNKDJBDJKKJUYBBHDFSv3&otracker=hp_bannerads_4_2.bannerAdCard.BANNERADS_f_SE5FJZ9QCWTP"
    },
    {
        img : "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/6c93de92458aa0c1.jpeg?q=50",
        link : "https://www.flipkart.com/6bo/b5g/~cs-ionqlb5ght/pr?sid=6bo%2Cb5g&collection-tab-name=Apple+MacBook&otracker=hp_bannerads_2_2.bannerAdCard.BANNERADS_Alt_44UZJMJ94YR3"
    },
    {
        img : "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/d02b3b49e4150abb.jpg?q=50",
        link : "https://www.flipkart.com/infinix-hot-20-5g-space-blue-64-gb/p/itm6646cdd2ff265?pid=MOBGK23W5QZQGSZW&param=547875&otracker=hp_bannerads_3_2.bannerAdCard.BANNERADS_Cat_Mob_HPW_Infinix%2BHot%2B20%2B5G_VHN6I1MV48BP"
    },
    {
        img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c0bec65432fb07fc.jpg?q=50",
        link : "https://www.flipkart.com/travel/flights?param=FKDTHPWNOV22zerofeenmnvndghkskjsjbjn&otracker=hp_bannerads_4_2.bannerAdCard.BANNERADS_1_LLSGOIN663NS"
    }
]


let imagesEl = document.querySelector(".images")
let imagesHTML = ''
console.log(imageSlides)

imageSlides.forEach(el => {
    imagesHTML += `
    <div class="sliding_item">
        <a href="${el.link}">
            <img src="${el.img}" />
        </a> 
    </div>
    `
})
imagesEl.innerHTML = imagesHTML;

let prev_imgEl = document.getElementById("prev_img")
let nxt_imgEl = document.getElementById("nxt_img")
let start = 0;
let end = -400;

prev_imgEl.addEventListener("click", handlePrev)
nxt_imgEl.addEventListener("click", handleNxt)

function handlePrev(){
    let all_images = document.querySelectorAll(".sliding_item")
    console.log(all_images)
    if(start<0)
        start+=100
    all_images.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}

function handleNxt(){
    let all_images = document.querySelectorAll(".sliding_item")
    console.log(all_images)
    if(start>end)
        start-=100
    all_images.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}

function renderImages(){
    if (start>end){
        handleNxt()
    }
    else{
        start = 100
    }
}
setInterval(renderImages,5000)