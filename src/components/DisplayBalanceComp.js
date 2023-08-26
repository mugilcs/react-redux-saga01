import DisplayBalance from "./DisplayBalance";
import { Grid, Segment, Statistic } from "semantic-ui-react";

function DisplayBalanceComp({ incomeTotal, expenseTotal }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color="red" title="Income" value={incomeTotal} />
          </Grid.Column>
          <Grid.Column>
            <Statistic size="small">
              <DisplayBalance
                color="green"
                title="Expensis"
                value={expenseTotal}
              />
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalanceComp;
