
export const title_chat = document.querySelector('.title-chat');
export const title_chat_subname = document.querySelector('.side-bar-modal-contact-input-subname');
export const title_chat_item = document.querySelector('.chat-title');
export const title_chat_top_bar = document.querySelector('.top-bar-chat-title');
export const title_chat_side_bar = document.querySelector('.side-bar-chat-title');
export const input_side_bar_modal_contact = document.querySelector('.side-bar-modal-contact-input-name');
export const input_side_bar_modal_contact_subname = document.querySelector('.side-bar-modal-contact-input-subname');

export function getCombinedName(name, subname) {
    if (!name && !subname) return '';
    let combined = '';

    if (name && subname) {
        combined = `${name} ${subname}`;
    } else if (name) {
        combined = name;
    } else if (subname) {
        combined = subname;
    }
    
    if (combined.length > 25) {
        return combined.substring(0, 25) + '...';
    }
    return combined;
}


const numbers = {}