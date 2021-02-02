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
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="sideshowTicket">Sideshow Ticket</button>
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


eventHub.addEventListener("click", event => {
    if (event.target.id === "gameTicket") {
        const gameTicketEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameTicketEvent)
        console.log("Game Button clicked, Event Dispatched")
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "sideshowTicket") {
        const sideshowTicketEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowTicketEvent)
        console.log("Sideshow Button clicked, Event Dispatched")
    }
})