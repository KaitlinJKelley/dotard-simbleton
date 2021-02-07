import { Business } from "./Business.js"
import { useBusinesses } from "./BusinessProvider.js"


export const businessList = () => {
    const contentTarget = document.querySelector(".container")

    const businessArray = useBusinesses()

    businessArray.forEach((businessObj) => {contentTarget.innerHTML += `${Business(businessObj)}`})
}

