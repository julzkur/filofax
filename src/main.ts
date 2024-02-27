import {CompanyInfo, IndividualInfo, Contact} from './types/types';

function createContactCard(contact: Contact<IndividualInfo | CompanyInfo>): string {
    const infoHtml = `
        <div>Phone: ${contact.info.phoneNumber}</div>
        <div>Email: ${contact.info.emailAddress}</div>
        <div>Address: ${contact.info.address}</div>
        <div>Website: <a href="${contact.info.website}" target="_blank">${contact.info.website}</a></div>
    `;

    return `
        <div class="contact-card">
            <img src="${contact.thumbnail}" alt="${contact.name}">
            <h3>${contact.name}</h3>
            ${infoHtml}
        </div>
    `;
}

async function loadAndDisplayContacts() {
    try {
        const response = await fetch('/data/prepopulation.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json(); 
        const contacts = data.contacts;
        console.log(contacts) 
        
        console.log(contacts); 
        
        const contactsContainer = document.getElementById('contacts'); 
        if (contactsContainer) {
            contactsContainer.innerHTML = ''; 
            contacts.forEach(contact => {
                contactsContainer.innerHTML += createContactCard(contact);
            });
        } 
    } catch (error) {
        console.error("Could not load contacts:", error);
    }
}

loadAndDisplayContacts();

