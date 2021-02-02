const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
        <div class="person"></div>
        <div class="rider"></div>
        `
        console.log("SideshowTicketHolder component reacted to the click event")
    })
}