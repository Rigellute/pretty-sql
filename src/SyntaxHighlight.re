
[@bs.module] external syntaxHighlight : ReasonReact.reactClass = "react-syntax-highlighter";

let make = (~language: string, children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=syntaxHighlight,
    ~props={"language": language},
    children
  );
