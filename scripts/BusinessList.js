import { Business } from "./Business.js"
import { useBusinesses } from "./BusinessProvider.js"

let contentTarget = document.querySelector(".container")

let newYorkArray = []

export const businessList = () => {
    
    const businessArray = useBusinesses()
    
    contentTarget.innerHTML = `<h1>Active Businesses</h1>`
    businessArray.forEach((businessObj) => {contentTarget.innerHTML += `${Business(businessObj)}`})
    
    newYorkBusinesses()
    manufacturingBusinesses()
}

const newYorkBusinesses = () => {
    const businessArray = useBusinesses()

    let newYorkArray = businessArray.filter(businessObj => businessObj.addressStateCode === "NY" ? true : false)
    
    contentTarget.innerHTML += `<h1>New York Businesses</h1>`
    newYorkArray.forEach((businessObj) => {contentTarget.innerHTML += `<article class="businessList--newYork">${Business(businessObj)}</article>`})
}

const manufacturingBusinesses = () => {
    const businessArray = useBusinesses()

    let manufacturingArray = businessArray.filter(businessObj => businessObj.companyIndustry === "Manufacturing" ? true : false)
    
    contentTarget.innerHTML += `<h1>Manufacturing Businesses</h1>`
    manufacturingArray.forEach((businessObj) => {contentTarget.innerHTML += `<article class="businessList--manufacturing">${Business(businessObj)}</article>`})
    
}


