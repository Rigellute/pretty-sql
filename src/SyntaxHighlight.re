
[@bs.module "react-syntax-highlighter"] external syntaxHighlight : ReasonReact.reactClass = "default";

[@bs.module "react-syntax-highlighter/styles/hljs/atom-one-dark"] external dark : ReasonReact.reactClass = "default";

let make = (~language: string, children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=syntaxHighlight,
    ~props={"language": language, "style": dark},
    children
  );
