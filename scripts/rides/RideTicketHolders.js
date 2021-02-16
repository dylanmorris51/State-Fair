const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person rider"></div>
    `
}

eventHub.addEventListener("rideTicketClicked", RideTicketHolders)

export const FullPackageTicketHolders = () => {
    // debugger
    contentTarget.innerHTML += `
    <div class="person bigSpender"></div>
    `
}   

eventHub.addEventListener("fullPackageTicketClicked", FullPackageTicketHolders)