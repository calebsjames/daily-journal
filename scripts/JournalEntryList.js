import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntryOld.js"
import { deleteEntry } from "./JournalDataProvider.js"
const eventHub = document.querySelector(".container")
const entryLog = document.querySelector(".journalEntryOld")
// DOM reference to where all entries will be rendered



export const EntryListComponent = () => {
    getEntries()
        .then(() => {
            const entryArray = useJournalEntries()
            renderToDom(entryArray)
        })
}

const renderToDom = (entryCollection) => {
    let journalHTMLRepresentation = ""

    for (const entry of entryCollection) {
        journalHTMLRepresentation += JournalEntryComponent(entry)
}

    entryLog.innerHTML += `
        <p id="archivedTitle"> Archived Entries</p>
        <div id="archiveButtons">
        <button id="showEntries">Show Journal Entries</button>
        <div id="moodRadios">
            <input type="radio" id="1" name="moodFilter" value="Rapturous">
            <label for="Rapturous">Rapturious</label>
            <input type="radio" id="2" name="moodFilter" value="Ecstatic">
            <label for="Ecstatic">Ecstatic</label>
            <input type="radio" id="3" name="moodFilter" value="Joyful">
            <label for="Joyful">Joyful</label>
            <input type="radio" id="4" name="moodFilter" value="Dreadful">
            <label for="Dreadful">Bashing head against wall</label>
        </div>
        <button id="clearEntries">Clear Journal Entries</button>
        </div>
        <article class="journalEntriesOld">
        ${journalHTMLRepresentation}
        </article>
        `
        
}

//listen for "entryStateChanged" event. Reload new elements to DOM
eventHub.addEventListener("entryStateChanged", event => {
    if (entryLog.innerHTML !== "") {
        entryLog.innerHTML = ""
        EntryListComponent()
    }
})





//eventlistener that listens for delete entry event
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        // debugger
        const [prefix, id] = clickEvent.target.id.split("--")
        
        deleteEntry(id)
        entryLog.innerHTML = ""
        EntryListComponent()
    }
})
