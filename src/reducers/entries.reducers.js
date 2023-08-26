import entriesType from "../actions/entries.actions";

const entriesReducer = (state = initialEntries, action) => {
  switch (action.type) {
    case entriesType.POPULATE_ENTRIES:
      return action.payload;

    case entriesType.ADD_ENTRY_RESULT:
      const newEntries = state.concat({ ...action.payload });
      console.log(newEntries);
      return newEntries;

    case entriesType.DELETE_ENTRY_RESULT:
      console.log("Deleting ----");
      const deletedEntries = state.filter(
        (entry) => entry.id !== action.payload.id
      );
      return deletedEntries;

    case entriesType.GET_ENTRIES_DETAILS:
    case entriesType.UPDATE_ENTRY:
      const newEntriesEdit = [...state];

      const index = newEntriesEdit.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntriesEdit[index] = {
        ...newEntriesEdit[index],
        ...action.payload.entry,
      };
      return newEntriesEdit;

    default:
      return state;
  }
};

var initialEntries = [];
// var initialEntries = [
//   { id: 1, discription: "Work Income redux", value: 1000, isExpance: false },
//   { id: 2, discription: "Water Bill", value: 20, isExpance: true },
//   { id: 3, discription: "Rent", value: 300, isExpance: true },
//   { id: 4, discription: "Power Bill", value: 90, isExpance: true },
// ];

export default entriesReducer;
