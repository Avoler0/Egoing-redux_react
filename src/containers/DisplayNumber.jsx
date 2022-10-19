import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

/** Redux의 state를 전달해 주기위한 함수*/
function mapReduxStateToReactProps(state){
  return {
    number: state.number
  }
}


export default connect(mapReduxStateToReactProps)(DisplayNumber);
