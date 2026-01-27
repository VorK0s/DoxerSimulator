import {
    getCombinedName,
    title_chat,
    title_chat_subname,
    title_chat_item,
    title_chat_top_bar,
    title_chat_side_bar,
    input_side_bar_modal_contact,
    input_side_bar_modal_contact_subname
} from './chatDetails.js'

const btn_chat = document.querySelector('.chat-item');
const not_in_chat = document.querySelector('.not-in-chat');
const in_chat = document.querySelector('.in-chat');
const edit_contact_btn = document.querySelector('.side-bar-edit-contact-btn');
export const edit_contact_modal = document.querySelector('.side-bar-modal-background-contact-edit');
const edit_contact_cancel = document.querySelector('.side-bar-modal-contact-btn-cancel');
export const modal_done_btn = document.querySelector('.side-bar-modal-contact-btn-done');
export let inModal = 0;

const numbers = {};


modal_done_btn.addEventListener("click", editContact);
btn_chat.addEventListener("click", openChat);
edit_contact_btn.addEventListener("click", openModalContact);
edit_contact_cancel.addEventListener("click", closeModalContact);

export function closeModalContact() {
    inModal = 0;
    edit_contact_modal.setAttribute('id', 'hide');
}

function openModalContact() {
    inModal = 1;
    edit_contact_modal.removeAttribute('id', 'hide');
}

export function openChat() {
    console.log('alala');
    btn_chat.classList.add('active');
    not_in_chat.setAttribute('id', 'hide');
    in_chat.removeAttribute('id');    
}


window.addEventListener('keydown', function(e) {
    if (inModal == 0) {
        if (e.key === 'Escape') {
            btn_chat.classList.remove('active');
            not_in_chat.removeAttribute('id');
            in_chat.setAttribute('id', 'hide');
        }
    } else {
        if (e.key === 'Escape') {
            edit_contact_modal.setAttribute('id', 'hide');
            inModal = 0;
        }
    }
});


export function editContact() {
    const name = input_side_bar_modal_contact ? input_side_bar_modal_contact.value : '';
    const subname = input_side_bar_modal_contact_subname ? input_side_bar_modal_contact_subname.value : '';
    
    const combinedName = getCombinedName(name, subname);

    if (title_chat_item) {
        title_chat_item.textContent = combinedName;
    }
    if (title_chat) {
        title_chat.textContent = combinedName;
    }
    if (title_chat_top_bar) {
        title_chat_top_bar.textContent = combinedName;
    }
    if (title_chat_side_bar) {
        title_chat_side_bar.textContent = combinedName;
    }
    edit_contact_modal.setAttribute('id', 'hide');
}

editContact();