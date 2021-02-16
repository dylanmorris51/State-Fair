const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
        contentTarget.innerHTML += `
        <div class="person player"></div>`

}

eventHub.addEventListener("gameTicketClicked", GameTicketHolders)

export const FullPackageTicketHolders = () => {
    // debugger
    contentTarget.innerHTML += `
    <div class="person bigSpender"></div>
    `
}   

eventHub.addEventListener("fullPackageTicketClicked", FullPackageTicketHolders)