// const contentTarget = document.querySelector(".food, .rides, .games, .sideshow")
const contentTarget = document.querySelectorAll("div.people")

const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    // debugger
    contentTarget.forEach(target => 
        target.innerHTML += `
    <div class="person bigSpender"></div>
    `
    ) 
}   

eventHub.addEventListener("fullPackageTicketClicked", FullPackageTicketHolders)

//! Expirementing with queryselectorall