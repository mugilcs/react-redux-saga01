import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { closeEditModal } from "../actions/modals.actions";
import useEntriesDetails from "../hooks/useEntriesDetails";

function ModelEdit({ isOpen, discription, value, isExpence, id }) {
  const dispatch = useDispatch();

  const entryUpdate = useEntriesDetails(discription, value, isExpence);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Item</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {" "}
          <Form unstackable>
            <EntryForm
              discription={entryUpdate.discription}
              value={entryUpdate.value}
              isExpense={entryUpdate.isExpece}
              setDiscription={entryUpdate.setDiscription}
              setValue={entryUpdate.setValue}
              setIsexpense={entryUpdate.setIsexpense}
            />
          </Form>{" "}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close </Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>
          Ok{" "}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModelEdit;
