enum ContactType {
    Individual,
    Company
}

interface IndividualInfo {
    phoneNumber: string;
    title: string;
    emailAddress: string;
    address: string;
    website: string;
}

interface CompanyInfo {
    phoneNumber: string;
    industry: string;
    emailAddress: string;
    address: string;
    website: string;
    keyContacts: IndividualInfo[];
}

interface Contact<T> {
    name: string;
    thumbnail: string;
    type: ContactType;
    info: T;
}