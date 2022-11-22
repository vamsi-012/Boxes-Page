const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  return (
    <div className={className}>
      <h1>{boxText}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Boxes</h1>
    <div class="boxes-container">
      <Box className="bg-yellow-box" boxText="Small" />
      <Box className="bg-blue-box" boxText="Medium" />
      <Box className="bg-pink-box" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
