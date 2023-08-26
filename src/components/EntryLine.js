import React from "react";
import { Grid, Segment, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deletedEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modals.actions";

function EntryLine(props) {
  const { id, discription, value, isExpance = false } = props;

  const dispatch = useDispatch();

  return (
    <>
      <Segment color={isExpance ? "red" : "green"}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>{discription} </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {"$"} {value}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              <Icon
                name="edit"
                enabled
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(deletedEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default EntryLine;
