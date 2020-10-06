type InitialStateType = typeof initialState;

let initialState = {
    title: 'Contact me',
    caption: 'Get in touch with me',
    address: 'PO Box 13359 Genslerstraße 84, Berlin Wedding',
    phone: '+030 98 29 05',
    email: 'anadoe@domain.com',
    site: 'www.envato.com',
    buttonName: 'Submit mail',
};

const contactsReducer = (state = initialState, action: any): InitialStateType => {
    return state;
};

export default contactsReducer;
