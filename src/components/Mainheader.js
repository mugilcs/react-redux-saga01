import React from "react";
import { Header } from "semantic-ui-react";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function Mainheader(props) {
  const { title, type = "h1" } = props;
  return <Header as={type}> {title}</Header>;
}

export default Mainheader;
