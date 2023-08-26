const types = {
  GET_ALL_ENTRIES: "GET_ALL_ENTRIES",
  GET_ENTRIES_DETAILS: "GET_ENTRIES_DETAILS",
  POPULATE_ENTRIES: "POPULATE_ENTRIES",
  ADD_ENTRY: "ADD_ENTRY",
  DELETE_ENTRY: "DELETE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
  DELETE_ENTRY_RESULT: "DELETE_ENTRY_RESULT",
  ADD_ENTRY_RESULT: "ADD_ENTRY_RESULT",
};

export default types;

export const getAllEntries = () => {
  return { type: types.GET_ALL_ENTRIES };
};

export const addEntryRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};

export const deletedEntryRedux = (id) => {
  return { type: types.DELETE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id, entry) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const populateEntries = (entries) => {
  return { type: types.POPULATE_ENTRIES, payload: entries };
};

export const getIdEntrioesDetails = (id, entry) => {
  return { type: types.GET_ENTRIES_DETAILS, payload: { id, entry } };
};
