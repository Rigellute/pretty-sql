
[@bs.module "react-syntax-highlighter"] external syntaxHighlight : ReasonReact.reactClass = "default";

let make = (~language: string, children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=syntaxHighlight,
    ~props={"language": language},
    children
  );
