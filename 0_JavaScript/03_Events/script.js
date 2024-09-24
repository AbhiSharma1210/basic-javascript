// Some methods to work with events

// This is an older approach to handle event
// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

// attachEvent() // Used with old IE
// jQuery - on // this was another way that was used

// Some other important event
// type, timestamp, defaultPrevented - this prevents the default behaviour of any tag.
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


// EVENT PROPOGATION:
// by default the 3rd parameter in addEventListener is 'false'.
// the parameter can either be true or false.
// false is called 'event bubbling' - this is mostly used now-a-days
// true is called 'event capturing' - used in some scenarios
// `event.stopPropagation()` prevents from going on the next event.


// Below is example of 'event bubbling'
// The inner most element will be implemented first and then it moves to its parent, and so on.
// document.getElementById('images').addEventListener('click', function (event) {
//     console.log("clicked in images")
// }, false) // The false here is event propogation

// document.getElementById('owl').addEventListener('click', function (event) {
//     console.log("owl clicked")
//     event.stopPropagation();
// }, false) // The false here is event propogation


// Below is example of 'event capturing'
// Its just the reverse of 'event bubbling' 
// it goes from top to bottom
// document.getElementById('images').addEventListener('click', function (event) {
//     console.log("capturing clicked in images")
//     event.stopPropagation();
// }, false) // The false here is event propogation

// document.getElementById('owl').addEventListener('click', function (event) {
//     console.log("capturing owl clicked")
// }, false) // The false here is event propogation

// document.getElementById('google').addEventListener('click', function (newEvent) {
//     newEvent.preventDefault();
//     newEvent.stopPropagation();
//     console.log("google clicked");
// }, false)



// Scenario - Remove the image that user clicked

// First method
// The issue with this approach is that if user clicks anywhere outside of the image
// then the complete list will be removed 
// document.querySelector('#images').addEventListener('click', (event) => {
//     let removeItem = event.target.parentNode
//     removeItem.remove()
// }, false)

// Second method
document.querySelector('#images').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        let removeItem = event.target.parentNode
        removeItem.remove()
    }
})