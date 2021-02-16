import { saveEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".journalEntryNew")




export const NoteForm = () => {
    getMoods()
        .then(() => {
            const moodsArray = useMoods()
            renderToDom(moodsArray)
        })
}


const renderToDom = (moodsCollection) => 
    contentTarget.innerHTML = `
        <h2>New Entry</h2>
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
                    <select name="journalMood" id="journalMood">                            
                        ${moodsCollection.map(
                            (mood) => {
                                return `<option value="${ mood.id }">${ mood.mood }</option>`
                            }
                        ).join("")
                    }
                    </select>
                </fieldset>      
                </form>
                <button id="saveEntry">Record Journal Entry</button>
    `




{/* <option value="rapturous">Rapturous</option>
                        <option value="ecstatic">Ecstatic</option>
                        <option value="joyful">Joyful</option>
                        <option value="headBashhing">Bashing head against wall</option> */}




// export const NoteForm = () => {
//     renderToDom(moodsArray)
// }



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        
        //Make a new object representation of a note
        const journalDate = document.getElementById("journalDate").value
        const journalConcepts = document.getElementById("journalConcepts").value
        const journalEntry = document.getElementById("journalEntry").value
        const journalMood = document.getElementById("journalMood").value
        
        const newEntry = {
            "date": journalDate,
            "text": journalEntry,
            "concept": journalConcepts,
            "moodId": journalMood
            // Key/value pairs here
        }
        

        // Change API state and application state
        saveEntry(newEntry)
    }
})
    