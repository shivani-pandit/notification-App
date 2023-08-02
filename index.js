const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-tittle">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="app-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="larger-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
