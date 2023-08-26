import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form } from "semantic-ui-react";
import useEntriesDetails from "../hooks/useEntriesDetails";

import Buttoncancelorok from "./Buttoncancelorok";
import EntryForm from "./EntryForm";

function NewEntryForm() {
  // const [discription, setDiscription] = useState("");
  // const [value, setValue] = useState("");
  // const [isExpense, setIsexpense] = useState(true);

  // const dispatch = useDispatch();

  // function addEntry() {
  //   dispatch(
  //     addEntryRedux({
  //       id: new Date().getTime(),
  //       discription,
  //       value,
  //       isExpance: isExpense,
  //     })
  //   );
  //   setDiscription("");
  //   setValue("");
  //   setIsexpense(true);
  // }

  const {
    discription,
    setDiscription,
    value,
    setValue,
    isExpence,
    setIsexpense,
    addEntry,
  } = useEntriesDetails();

  return (
    <Form unstackable>
      <EntryForm
        discription={discription}
        value={value}
        isExpence={isExpence}
        setDiscription={setDiscription}
        setValue={setValue}
        setIsexpense={setIsexpense}
      />
      <Buttoncancelorok addEntry={addEntry} />
    </Form>
  );
}

export default NewEntryForm;
