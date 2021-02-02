const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket") {
        const rideTicketEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketPurchased: true 
            }
        })
        eventHub.dispatchEvent(rideTicketEvent)
        // console.log("Ride Button Clicked, event dispatched")
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}
