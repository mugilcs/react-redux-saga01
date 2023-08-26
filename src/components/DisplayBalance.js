import { Statistic } from "semantic-ui-react";

function DisplayBalance(props) {
  const { title, value, color, size = "tiny" } = props;
  return (
    <Statistic size="small">
      <Statistic.Label size={size} color={color}>
        {title}
      </Statistic.Label>
      <Statistic.Value>$ {isNaN(value) ? 0 : value}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalance;
