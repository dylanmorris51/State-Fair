const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")



export const SideshowTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person gawker"></div>
    `
}
eventHub.addEventListener("sideshowTicketClicked", SideshowTicketHolders)


// export const FullPackageTicketHolders = () => {
//     // debugger
//     contentTarget.innerHTML += `
//     <div class="person bigSpender"></div>
//     `
// }   

// eventHub.addEventListener("fullPackageTicketClicked", FullPackageTicketHolders)