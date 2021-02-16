import { useJournalEntries } from "./JournalDataProvider.js"
import { EntryListComponent, renderToDom } from "./JournalEntryList.js"


const eventHub = document.querySelector(".container")
const entryLog = document.querySelector(".journalEntryOld")

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) => {
    
    return `
        <section id="entry--${entry.id}" class="journalEntryCards">
            <div><b>Date: </b>${entry.date}</div>
            <div><b>Concept: </b>${entry.concept}</div>
            <div><b>Text: </b>${entry.text}</div>
            <div><b>Mood: </b>${entry.mood.mood}</div>
            <button id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `
}

// debugger


//event listener to filter journal entries by mood
eventHub.addEventListener("moodSelect", moodChosenEvent => {
        
        const mood = moodChosenEvent.detail.selectedMood
        const entries = useJournalEntries()
        

        const chosenEntries = entries.filter(
            entryObject => {
                if (entryObject.mood.mood === mood) {
                    return true
                }
            }
        ) 
        console.log(chosenEntries)
        entryLog.innerHTML = ""
        renderToDom(chosenEntries)
    }
)


//listen for "entryStateChanged" event. Reload new elements to DOM
eventHub.addEventListener("entryStateChanged", event => {
    if (entryLog.innerHTML !== "") {
        entryLog.innerHTML = ""
        EntryListComponent()
    }
})