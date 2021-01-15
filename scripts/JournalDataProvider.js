/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "01/14/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Joyful"
    }, 
    {
        id: 2,
        date: "01/16/2021",
        concept: "JS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Bashing head against wall"
    }, 
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}