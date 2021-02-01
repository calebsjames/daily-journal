/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) => {
    
    return `
        <section id="entry--${entry.id}" class="journalEntryOld">
            <div><b>Date: </b>${entry.date}</div>
            <div><b>Concept: </b>${entry.concept}</div>
            <div><b>Text: </b>${entry.text}</div>
            <div><b>Mood: </b>${entry.mood}</div>
        </section>
    `
}

// debugger