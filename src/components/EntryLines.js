import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

export default function EntryLines({ entries, setIsopen, isExpense }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          setIsopen={setIsopen}
          isExpense={isExpense}
        />
      ))}
    </Container>
  );
}
