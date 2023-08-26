import React from "react";
import { Button } from "semantic-ui-react";

function Buttoncancelorok({ addEntry }) {
  return (
    <Button.Group style={{ marginBottom: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button onClick={() => addEntry()} primary>
        Ok
      </Button>
    </Button.Group>
  );
}

export default Buttoncancelorok;
