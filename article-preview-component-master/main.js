const shareBtn = document.querySelector('.card_content_button')
const shareContainer = document.querySelector('.card_content_social-icons')

shareBtn.addEventListener('click', () => {
 console.log('clicked')
 shareContainer.classList.toggle('show')
})