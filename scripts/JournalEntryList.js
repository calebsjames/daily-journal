import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntryOld.js"

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
        <button id="showEntries">Show Journal Entries</button>
        <button id="clearEntries">Clear Journal Entries</button>
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