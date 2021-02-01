import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".journalEntryNew")



const renderToDom = () => {
    contentTarget.innerHTML = `
        <h2>New Entry</h2>
        <button id="saveEntry">Record Journal Entry</button>
            <form class="formField" action="">
                <fieldset class="fieldSet">
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset class="fieldSet">
                    <label for="journalConcepts">Concepts covered</label>
                    <input type="text" name="journalConcepts" id="journalConcepts">
                </fieldset>
                <fieldset class="fieldSet">
                    <label for="journalEntry">Journal entry</label>
                    <textarea rows=10 cols= 70 name="journalEntry" id="journalEntry"></textarea>
                </fieldset>
                <fieldset class="fieldSet">
                    <label for="journalMood">Current mood</label>
                    <select name="journalMood" id="journalMood">                            <option value="rapturous">Rapturous</option>
                        <option value="ecstatic">Ecstatic</option>
                        <option value="joyful">Joyful</option>
                        <option value="headBashhing">Bashing head against wall</option>
                    </select>
                </fieldset>      
                </form>
    `
}

export const NoteForm = () => {
    renderToDom()
}



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        
        //Make a new object representation of a note
        const journalDate = document.getElementById("journalDate").value
        const journalConcepts = document.getElementById("journalConcepts").value
        const journalEntry = document.getElementById("journalEntry").value
        const journalMood = document.getElementById("journalMood").value
        // const author = document.getElementById("author").value
        const newEntry = {
            "date": journalDate,
            "text": journalEntry,
            "concept": journalConcepts,
            "mood": journalMood
            // Key/value pairs here
        }
        // debugger

        // Change API state and application state
        saveEntry(newEntry)
    }
})
    