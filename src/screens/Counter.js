import ScreenContainer from './Counter.container';
import { connect } from 'react-redux';
import { decreaseAction, increaseAction } from '../store/actions';

class Counter extends ScreenContainer {
  state = {};

};

const mapStateToProps = state => {
  return {
    count: state.counterReducer? state.counterReducer: 0,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onDecrease: step => {
      dispatch(decreaseAction(step));
    },
    onIncrease: step => {
      dispatch(increaseAction(step));
    }
  }
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;

