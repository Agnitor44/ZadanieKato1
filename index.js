

const lineContainer = document.querySelector('.lineContainer')
const mobileLineDistance = 60;
const lineDistance = 80;
let isMobileMenuOpened = false
const createLines = (count) => {
   for (let index = 0; index < count; index++) {

    const line = document.createElement('div');
line.classList.add("line")
lineContainer.appendChild(line)

   }

}
const getLines = () => {
    lineContainer.replaceChildren()
    const w = window.innerWidth;


const lineCount = Math.floor( w / (w > 500 ? lineDistance : mobileLineDistance) )
createLines( lineCount)


}

getLines()

window.addEventListener('resize', () => {
getLines()

})



const mobileMenu = document.querySelector('.header nav .innerContainer') 
const openMobileButton = document.querySelector('.header nav .menuButton button.open')
const closeMobileButton = document.querySelector('.header nav .menuButton button.close')
// const closeMobileButton = document.querySelector('')

openMobileButton.addEventListener('click', () => {
    isMobileMenuOpened = true
  
 
    

    mobileMenu.style.left = 0
    openMobileButton.style.display = 'none'
    closeMobileButton.style.display = 'block'
    
})


closeMobileButton.addEventListener('click', () => {
    isMobileMenuOpened = false

    mobileMenu.style.left = '100%'

    openMobileButton.style.display = 'block'
    closeMobileButton.style.display = 'none'
    

 

    
})