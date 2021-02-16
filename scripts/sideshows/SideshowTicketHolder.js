const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")



export const SideshowTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person gawker"></div>
    `
}
eventHub.addEventListener("sideshowTicketClicked", SideshowTicketHolders)