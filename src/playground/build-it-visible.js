class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <p>Hey these are some details you can see!</p>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// const appRoot = document.getElementById("app");
// let detail = "";
// const toggle = () => {
//   detail = detail ? "" : "Hey these are some details you can see!";
//   render();
// };
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visiblity Toggle</h1>
//       <button onClick={toggle}>
//         {detail ? "Hide Details" : "Show Details"}
//       </button>
//       <p>{detail}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();
