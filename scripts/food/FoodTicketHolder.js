const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person eater"></div>
    `
}   

eventHub.addEventListener("foodTicketClicked", FoodTicketHolders)

// export const FullPackageTicketHolders = () => {
//     // debugger
//     contentTarget.innerHTML += `
//     <div class="person bigSpender"></div>
//     `
// }   

// eventHub.addEventListener("fullPackageTicketClicked", FullPackageTicketHolders)