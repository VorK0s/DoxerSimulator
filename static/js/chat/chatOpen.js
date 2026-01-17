let btn_chat = document.querySelector('.chat-item');
let not_in_chat = document.querySelector('.not-in-chat');
let in_chat = document.querySelector('.in-chat');

btn_chat.addEventListener("click", openChat);

function openChat() {
    console.log('alala')
    btn_chat.classList.add('active')
    not_in_chat.setAttribute('id', 'hide')
    in_chat.removeAttribute('id');    
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        btn_chat.classList.remove('active')
        not_in_chat.removeAttribute('id');
        in_chat.setAttribute('id', 'hide');
    }
});
