import { Business } from "./Business.js"
import { useBusinesses } from "./BusinessProvider.js"


export const businessList = () => {
    let contentTarget = document.querySelector(".container")

    const businessArray = useBusinesses()

    contentTarget.innerHTML = `<h1>Active Businesses</h1>`
    businessArray.forEach((businessObj) => {contentTarget.innerHTML += `${Business(businessObj)}`})
}

