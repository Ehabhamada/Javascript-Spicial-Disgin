// Select Landing Page Element
let landingPage =document.querySelector ( ".landing-page" ) ;
// Creat array imgs
let imgarry=[];
for(let i = 0; i < 17 ; i++){
    imgarry.push(`${i}.jpg`)
}

// background option varibal
let backgroundoption= true;
// variabel backgrund interval controal
let interval;

// variable to check loacalstorg random background in local
let backgroundlocaliteam =localStorage.getItem("background")
// check if random background localstorig not empty
if(backgroundlocaliteam !== null){

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element=>{
    element.classList.remove("active")
});


  
   if (backgroundlocaliteam === "true") {
    backgroundoption = true;
    document.querySelector(".random-backgrounds .yes").classList.add("active")
  } else {
    backgroundoption = false;
    document.querySelector(".random-backgrounds .no").classList.add("active")
   }

}





// function random background
function randomize(){

    if ( backgroundoption === true) {
        
    // set interval for change img
       interval = setInterval(()=>{
    // Get Randonm number
       let rand=Math.floor(Math.random()*imgarry.length)
// Change background img
       landingPage.style.background=`url(../img/${imgarry[rand]})`
},10000)

} 
}
randomize()
// Setting Box
document.querySelector( ".toggle-setting .fa-gear" ).onclick = function(){
    // add class fa-spin for rotaion
      this.classList.toggle("fa-spin");
    // open and close setting
    document.querySelector ( ".settings-box" ).classList.toggle("open");
    
}
// Swich colors
const colorli= document.querySelectorAll(".colors-list li")

colorli.forEach(li => {
li.addEventListener("click",(e)=>{
    // set color on root
        document.documentElement.style.setProperty("--minColor",e.target.dataset.color)
    // set color on loacl storage
        localStorage.setItem("color",e.target.dataset.color)

        // Remov class eliment
        handleActive(e)
})
})

// check if thear local storge color
let mainColor = localStorage.getItem("color")
if (mainColor !== null) {
    document.documentElement.style.setProperty("--minColor",mainColor)

     // Remov class active from color list
             document.querySelectorAll(".colors-list li").forEach(element => {
                element.classList.remove("active");
                
                // Add Active Class On Element With Data - Color === Local Storage Item
                if (element.dataset.color=== mainColor) {
                    element.classList.add("active")
                }
            })
    

}

// Switch random backgruond
let randbackground= document.querySelectorAll(".random-backgrounds")
// loop on all spans
randbackground.forEach(span=>{
    // cleck evry span
    span.addEventListener("click",e=>{
// remove active class from all chelldern
handleActive(e)
if(e.target.dataset.background === "yes"){
    backgroundoption = true
    randomize()
    localStorage.setItem("background",true)
}else{
    backgroundoption = false
    clearInterval(interval)
    localStorage.setItem("background",false)
}
    })
})


// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop+1 > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;
      
    });

  
  };
  
 
  };


// Create Popup With The Image
let ourGallery = document.querySelectorAll(".Gallery img");

ourGallery.forEach(img =>{
    img.addEventListener("click",(e)=>{

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);


    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

        // Create Heading
        let imgHeading = document.createElement("h3");
  
        // Create text For Heading
        let imgText = document.createTextNode(img.alt);
  
        // Append The Text To The Heading
        imgHeading.appendChild(imgText);
  
        // Append The Heading To The Popup Box
        popupBox.appendChild(imgHeading);
  
      }
    
    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    
    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);


// Close Popup
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {
  
      // Remove The Current Popup
      e.target.parentNode.remove();
  
      // Remove Overlay
      document.querySelector(".popup-overlay").remove();
  
    }
  
  });
    })
})


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handle Active State
function handleActive(ev) {

  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  // Add Active Class On Self
  ev.target.classList.add("active");

}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove("active");

  });

  if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

  }

}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets_option", 'block');

    } else {

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

  });

});



// Reset Button
document.querySelector(".reset-options").onclick = function () {

  // localStorage.clear();
  localStorage.removeItem("color");
  localStorage.removeItem("background");
  localStorage.removeItem("bullets_option");

  // Reload Window
  window.location.reload();

};


// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {

    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {

      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

  }

});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
  e.stopPropagation();
}