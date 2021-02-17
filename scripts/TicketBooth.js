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
        <div class="ticketBooth">
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

eventHub.addEventListener("click", event => {
    const clickedEvent = event.target.id
    if (clickedEvent === "rideTicket" || "foodTicket" || "gameTicket" || "sideshowTicket" || "fullPackageTicket") {
        // debugger
        const customEvent = new CustomEvent(`${clickedEvent}Clicked`)
        eventHub.dispatchEvent(customEvent)
        console.log('customEvent: ', customEvent);

    }
})

