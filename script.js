
// var images = ["Images/akram-huseyn-NPP0qXVIGDQ-unsplash.jpg", "Images/alberto-restifo-Ni4NgA64TFQ-unsplash.jpg", "Images/alexandru-acea--WBYxmW4yuw-unsplash.jpg", "Images/alexandru-acea-XEB8y0nRRP4-unsplash.jpg"];
// let i = 0;

// personImage.src = images[0];

// const slide = ( ) => {
//     if(i == 0 || i < images.length - 1){
//         i++
//         personImage.src = images[i];
//     }

//     else{
//         i = 0;
//         personImage.src = images[i];
//     }
// };

// //setInterval(slide, 6000);

// nextBtn.addEventListener( "click", ( ) => {
//     if(i < images.length - 1){
//         i++
//         personImage.src = images[i];
//     }

//     else{
//         i = 0;
//         personImage.src = images[i];
//     }
// });

// previousBtn.addEventListener( "click", ( ) => {
//     if(i !== 0){
//         i--;
//         personImage.src = images[i];
//     }

//     else{
//         i = images.length - 1;
//         personImage.src = images[i];
//     }
// });



const personImage = document.getElementById("person");
const personName = document.getElementById("person-name");
const testimonial = document.getElementById("testimonial");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

// var ceo = {imageSrc: "Images/akram-huseyn-NPP0qXVIGDQ-unsplash.jpg" ,name: "Tim Okonkwo", description: "He's the C.E.O."};

// personImage.src = ceo.imageSrc;
// personName.innerText = ceo.name;
// testimonial.innerText = ceo.description;

var testimonies = [
    {position: "C.E.O.", imageSrc: "Images/akram-huseyn-NPP0qXVIGDQ-unsplash.jpg", name: "Tim Okonkwo", description: "He's the C.E.O."},
    {position: "technicalManager" ,imageSrc: "Images/alberto-restifo-Ni4NgA64TFQ-unsplash.jpg", name: "Campus Cafe", description: "He's the Technical Secretary."},
    {position: "Graphic Designer", imageSrc: "Images/alexandru-acea--WBYxmW4yuw-unsplash.jpg", name: "EagleKonnect", description: "He designs."}
];

let i = 0;

nextBtn.addEventListener('click', ( ) => {
if(i < testimonies.length - 1){
    i++;
    personImage.src = testimonies[i].imageSrc;
    personName.innerText = testimonies[i].name;
    testimonial.innerText = testimonies[i].description;
}

else{
    i = 0;
    personImage.src = testimonies[i].imageSrc;
    personName.innerText = testimonies[i].name;
    testimonial.innerText = testimonies[i].description;
}
});

previousBtn.addEventListener('click', ( ) => {
    if(i !== 0){
    i--;
    personImage.src = testimonies[i].imageSrc;
    personName.innerText = testimonies[i].name;
    testimonial.innerText = testimonies[i].description;
}

else{
    i = testimonies.length - 1;
    personImage.src = testimonies[i].imageSrc;
    personName.innerText = testimonies[i].name;
    testimonial.innerText = testimonies[i].description;
}

});
