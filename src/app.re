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
			<div>
				<div className="uk-background-primary uk-light uk-text-center uk-padding-large">	
					<h1 className="uk-heading-hero">
						{ReasonReact.stringToElement("Pretty SQL")}
					</h1>
					<p>
						{ReasonReact.stringToElement("Type your SQL below to prettify it")}
					</p>
				</div>
				<div className="App uk-container">
					<textarea
						className="uk-textarea"
						placeholder="Enter SQL here"
						_type="text"
						value=(_self.state.sqlText)
						onChange=(_self.reduce(onTextChange))
					/>
				
					<SyntaxHighlight language="sql">
						{ReasonReact.stringToElement(prettifySql(_self.state.sqlText))}
					</SyntaxHighlight>  
				</div>
			</div>
};
