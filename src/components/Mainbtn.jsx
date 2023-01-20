import "./main.css";
const Mainbtn = (props) => {
  return (
    <button id="nav-toggle" type="button" onClick={props.handleClick} className={`${props.button}`}>
      <p>EXPLORE</p>
    </button>
  );
};
export default Mainbtn;
