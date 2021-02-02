const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", event => {
        contentTarget.innerHTML += `
        <div class="person"></div>
        <div class="eater"></div>
        `
        console.log("Food Ticket Holder reacted to the click")
    })   
}