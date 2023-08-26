import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  discription,
  value,
  isExpense,
  setDiscription,
  setValue,
  setIsexpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          width={12}
          placeholder="New shining things"
          icon="tag"
          label="discription"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <Form.Input
          width={3}
          placeholder="New shining things"
          icon="doller"
          label="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Segment>
        <Checkbox
          toggle
          checked={isExpense}
          label="Is it Expense"
          onChange={() => setIsexpense((olseisExpense) => !olseisExpense)}
        />
      </Segment>
    </>
  );
}

export default EntryForm;
