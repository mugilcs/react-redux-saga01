import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { closeEditModal } from "../actions/modals.actions";

function useEntriesDetails(disc = "", val = "", isExp = true) {
  const [discription, setDiscription] = useState(disc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsexpense] = useState(isExp);

  const dispatch = useDispatch();

  useEffect(() => {
    setDiscription(disc);
    setValue(val);
    setIsexpense(isExp);
  }, [disc, val, isExp]);

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: new Date().getTime(),
        discription,
        value,
        isExpance: isExpense,
      })
    );
    resetValues();
  }

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        discription,
        value,
        isExpance: isExpense,
      })
    );
    resetValues();
    dispatch(closeEditModal());
  }

  function resetValues() {
    setDiscription("");
    setValue("");
    setIsexpense(true);
  }
  return {
    discription,
    setDiscription,
    value,
    setValue,
    isExpense,
    setIsexpense,
    addEntry,
    updateEntry,
  };
}

export default useEntriesDetails;
