
export const Business = (businessObj) => {
    return `
    <section class="business">
        <h2 class="business__name">${businessObj.companyName}</h2>
        <p>${businessObj.addressFullStreet}</p>
        <p>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
    </section>
    `
}

