import React from 'react'
import { connect } from 'react-redux';

function CountPage(props) {
    return (
        <div>
          <div>
         <label htmlFor="">Add Count</label>
         <button onClick={()=>props.addCountToCounter()}>+</button>     
        </div>  

        <div>
         <label htmlFor="">Reduce Count</label>
         <button onClick={()=>props.reduceCountToCounter()}>-</button>     
        </div>  

        <div>Count ={props.count} </div>
        </div>
    )
}
//step no. 1
const mapStateToProps = (state) => {
    console.log(state);
    return {
      count: state.countReduce.count,
    };
  };
  //step no. 2
  const mapDispatchToProps = (dispatch) => {
    return {
      addCountToCounter: ()=>dispatch({ type:"ADD_COUNT" }),
      reduceCountToCounter: ()=>dispatch({ type:"REDUC_COUNT" }),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CountPage);