const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
        <div class="person"></div>
        <div class="rider"></div>
        `
        console.log("GameTicketHolder component reacted to the click event")
    })
}