const changeButton = document.getElementById('navChange');
console.log(changeButton)
const homeButton = document.getElementById('navHome')
console.log(homeButton)

changeButton.addEventListener('click', () => {
    homeButton.style.backgroundColor = 'red'
})