const h1Tag = React.createElement("h1", { id: "heading" }, "Hello World from react");
const h2Tag = React.createElement("h2", { id: "heading2" }, "Hello World from react");
const divTag = React.createElement("div", { id: "container" },[h1Tag,h2Tag]);
const divTag2 = React.createElement("div", { id: "container2" }, divTag);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(divTag2)