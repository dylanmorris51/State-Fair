const contentTarget = document.querySelector(".food", ".rides", ".games", ".sideshow")

const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    // debugger
    contentTarget.innerHTML += `
    <div class="person bigSpender"></div>
    `
}   

eventHub.addEventListener("fullPackageTicketClicked", FullPackageTicketHolders)