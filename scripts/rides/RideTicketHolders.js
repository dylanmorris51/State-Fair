const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
        <div class="person"></div>
        <div class="rider"></div>
        `
        console.log("RideTicketHolder component reacted to the click event")
    })
}

