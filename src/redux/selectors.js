export const getContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilteredContacts = (({contacts, filter}) => {
    const filterNormal = filter.toLowerCase();
    const result = contacts.filter(({name}) => {
        const normalizedName = name.toLowerCase();
        return normalizedName.includes(filterNormal)
    })
    return result;
});