import "./styles.css";

import { Container } from "semantic-ui-react";
import Mainheader from "./components/Mainheader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalanceComp from "./components/DisplayBalanceComp";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EntryLines from "./components/EntryLines";
import ModelEdit from "./components/ModelEdit";
import { getAllEntries } from "./actions/entries.actions";
// import axios from "axios";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  useEffect(() => {
    let totalExpnses = 0;
    let totalIncome = 0;

    entries.map((entry) => {
      if (entry.isExpance) {
        totalExpnses += +entry.value;
      } else {
        totalIncome += +entry.value;
      }
    });

    setIncomeTotal(totalIncome);
    setExpense(totalExpnses);
    setTotal(totalIncome - totalExpnses);
  }, [entries]);

  return (
    <Container>
      <Mainheader title="Budject" />
      <DisplayBalance size="small" title="Your Balance" value={total} />
      <DisplayBalanceComp
        incomeTotal={incomeTotal}
        expenseTotal={expenseTotal}
      />
      <Mainheader title="History" type="h3" />
      <EntryLines entries={entries} />

      <Mainheader title="Add New Transection" type="h3" />
      <NewEntryForm />
      <ModelEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}
