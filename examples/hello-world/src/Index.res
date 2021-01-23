module App = {
  @react.component
  let make = (~message) => {
    <div> <span> {React.string(message)} </span> </div>
  }
}

module Document = {
  @val
  external getElementById: string => option<Dom.element> = "document.getElementById"
}

let root = Document.getElementById("root")

switch root {
| Some(root) => ReactDOMRe.render(<App message="Hello React" />, root)
| None => Js.log("Could not find #root element. Are you sure you setup index.html correctly?")
}
