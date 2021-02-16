const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
        contentTarget.innerHTML += `
        <div class="person player"></div>`

}

eventHub.addEventListener("gameTicketClicked", GameTicketHolders)