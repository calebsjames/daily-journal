/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */

 //
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered

export const EntryListComponent = () => {

    const entryLog = document.querySelector(".journalEntryOld")
    const entries = useJournalEntries()

    let journalHTMLRepresentation = ""
    for (const entry of entries) {
        journalHTMLRepresentation += JournalEntryComponent(entry)
    }
        
    entryLog.innerHTML += `
        <article class="journalEntries">
        ${journalHTMLRepresentation}
        </article>
        `
}