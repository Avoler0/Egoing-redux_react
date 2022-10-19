import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

/** Redux의 dispatch를 전달해 주기위한 함수*/
function mapReduxDispatchToReactProps(dispatch){
  return {
    onClick:function(size){
      dispatch({type:'INCREMENT',size:size})
    }
  }
}

export default connect(null,mapReduxDispatchToReactProps)(AddNumber)
