const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket") {
        const rideTicketEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketPurchased: true 
            }
        })
        eventHub.dispatchEvent(rideTicketEvent)
        console.log("Ride Button Clicked, Event Dispatched")
    }
})


eventHub.addEventListener("click", event => {
    if (event.target.id === "foodTicket") {
        const foodTicketEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodTicketEvent)
        console.log("Food Button clicked, Event Dispatched")
    }
})