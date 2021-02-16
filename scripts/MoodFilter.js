const eventHub = document.querySelector(".container")

//Listen for a change on eventHub. If eventListener detects a change, changeEvent funtion runs
eventHub.addEventListener("change", event => {
    //if eventListener detects a change on the "moodFilter" element...    
    if (event.target.name === "moodFilter") {
        debugger
        //gets the name of the currently selected mood
        const selectedMood = event.target.value
        
//create new custom event to be dispatched
const moodSelectedCustomEvent = new CustomEvent("moodSelect", {
    detail: {
        selectedMood: selectedMood
    }
})
//dispatch the custom event
eventHub.dispatchEvent(moodSelectedCustomEvent)

}
})