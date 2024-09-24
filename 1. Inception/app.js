/* 
<div id="parent">
  <div id="child1">
    <div id="grandChild1">
      <h1>I'm the heading!</h1>
    </div>
    <div id="grandChild2">
    </div>
     </div>
  <div id="child2">
  </div>
</div>

*/

const parent = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id: "child1"}, [
    React.createElement("div", {id: "grandChild1"}, 
      React.createElement("h1", {}, "I'm the heading!")
    ),
    React.createElement("div", {id: "grandChild2"},)
  ]
  ),
  React.createElement("div", {id: "child2"},),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);