/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



// build the navbar 


// access the contents of the section
//  get all sectio inside html 
const Sec = document.querySelectorAll('section')

//  Get the element with id='navbar__list'


const NavBar = document.getElementById('navbar__list')

let CreatigNavBar = () => {
    for (let section of Sec) {
        // Create an empty  listItem
        Item = document.createElement('li')
        // Create some content for the new list item
        Item.innerHTML = `<a class="menu__link" href="#${section.id}">            ${section.getAttribute("data-nav")}
              </a>`
        // Item.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.NavBar}</a>`

        // Apply that content to the new element

        NavBar.appendChild(Item);
    }
}
CreatigNavBar();





// Add class 'active' to section when near top of viewport

// add Active class to section with viewPort 

let ActiveSection = () => {
    for (let section of Sec) {
        if (section.getBoundingClientRect().top >= -200
            && section.getBoundingClientRect().top <= 300) {
            // use the classList API to remove and add classes

            section.classList.add('your-active-class')
            // access the contents of the section and make  it Active 
            document.querySelector(`a[href='#${section.id}']`).classList.add('active')

        }
        // if section not active , use classList to remove active
        else {
            section.classList.remove('your-active-class')
            document.querySelector(`a[href='#${section.id}']`).classList.remove('active');
        }

    }
}

// Scroll to section on link click  with Smooth
//  Get the element with className='menu__link'


const scroll = document.getElementsByClassName("menu__link")
// Loop with scoll element
for (let Scroool of scroll) {
    Scroool.addEventListener('click', function (section) {
        // Change scrool animatin to smooth
        //  scrollIntoView interface's method scrolls the element's parent container 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth", 
            block: "start",
             inline: "nearest"
        })
        //  if the event does not get explicitly handled, its default action should not be taken as it normally would be.
        section.preventDefault()

    })
}

// call ActiveSection function 

document.addEventListener('scroll', ActiveSection)
