/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) => {
    
    return `
        <section id="entry--${entry.id}" class="journalEntryOld">
            <div>${entry.date}</div>
            <div>${entry.concept}</div>
            <div>${entry.text}</div>
            <div>${entry.mood}</div>
        </section>
    `
}

// debugger