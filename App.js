// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World React!"
// );
// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );
// root.render(heading);

/*  
*
*
<div id="parent">
 <div id= "child">
 <h1>I'm h1 tag</h1>
 <h2>I am a Programmer</h2>
 </div>
 <div id= "child2">
 <h1>I'm h1 tag</h1>
 <h2>I am a Programmer</h2>
 </div>
 </div>

 **ReactElement(Object) => HTML(Browser understand)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      {
        id: "child",
      },
      [
        React.createElement(
          "h1",
          {},
          "I'm h1 tag"
        ),
        React.createElement(
          "h2",
          {},
          "I am a Programmer"
        ),
      ],

      React.createElement(
        "div",
        { id: "child2" },
        [
          React.createElement(
            "h1",
            {},
            "I'm h1 tag"
          ),
          React.createElement(
            "h2",
            {},
            "I am a Programmer"
          ),
        ]
      )
    ),
  ]
);
console.log(parent);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(parent);
