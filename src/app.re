[%bs.raw {|require('./app.css')|}];

[@bs.module "./prettifySql.js"] external prettifySql: string => string = "default";

let valueFromEvent = (evt): string => (
  evt
  |> ReactEventRe.Form.target
  |> ReactDOMRe.domElementToObj
)##value;

type state = {
  sqlText: string,
  formattedSql: string,
};

type action =
  | TextChange(string);

let component = ReasonReact.reducerComponent("App");

let onTextChange = (evt) => {
  let sqlText = evt
    |> valueFromEvent;

  TextChange(sqlText);
};

let make = (_children) => {
  ...component,
  initialState: () => {
    sqlText: "",
    formattedSql: "",
  },
  reducer: (action, _state) =>
    switch action {
      | TextChange(text) => ReasonReact.Update({
        ..._state,
        sqlText: text
      })
    },
  render: (_self) =>
    <div className="App">
      <textarea
        _type="text"
        value=(_self.state.sqlText)
        onChange=(_self.reduce(onTextChange))
      />

      <SyntaxHighlight language="sql">
        {ReasonReact.stringToElement(prettifySql(_self.state.sqlText))}
      </SyntaxHighlight>  
    </div>
};
