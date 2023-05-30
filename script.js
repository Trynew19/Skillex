function imagesHoveCode() {
	var card = document.querySelectorAll('.card');
	var cardImgDiv = document.querySelectorAll('.card-img');
	var mainImgs = document.querySelector('.main_imgs');
	// console.log(card);
    Array.from(card).forEach( elements =>{
        card[0].children[0].children[1].children[1].style.opacity= '1'
        elements.addEventListener('mouseenter',()=>{
            // jaise kis bhi box me enter hoga sabse pahle hi fist box ka big text Opacity zero ho jayega
            card[0].children[0].children[1].children[1].style.opacity= '0';

            // es loop se jaise mouse in hota hai sabka width 21% hoga 
            for (let k = 0; k < card.length; k++) {
                card[k].style.width = '21%';
            }
            // es element ka matab jisme hover hua hai vo 58% rahe 
            elements.style.width = "58%"

            // jaise hi mouse enter ho small txt box ke opacity 0 hoga
            elements.children[0].children[1].children[0].style.opacity = "0";
            // jaise hi mouse enter ho big txt box ke opacity 1 hoga
            elements.children[0].children[1].children[1].style.opacity = "1";
        })

        elements.addEventListener('mouseleave',()=>{

              // jaise hi Mouse Leave hota again small txt box ke opacity 1 hota hai
            elements.children[0].children[1].children[0].style.opacity = "1"

             // jaise hi Mouse Leave hota again big txt box ke opacity 0 hota hai
            elements.children[0].children[1].children[1].style.opacity = "0";

            // jaise hi kahi se bhi mouse leave hota hai to es code se pahle wale box ka opacity wapis 1 ho jata hai
            card[0].children[0].children[1].children[1].style.opacity= '1';

            // es pahle wale card ka small box ko opacity 0 ho jata hai
            card[0].children[0].children[1].children[0].style.opacity= '0';

            // then ye loop again jaise hi kahi se bhi leave hota hai sabka width 21 or first wale ka 58% kart jo ki by default status pe pahuch tha hai
            for (let k = 0; k < card.length; k++) {
                card[k].style.width = '21%';
                card[0].style.width= "58%";
            }
        })
    })
}
imagesHoveCode();
