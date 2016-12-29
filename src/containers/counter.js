import Counter from '../components/counter'
import {increaseAction, decrementAction} from '../actions/action'
import {connect} from 'react-redux'

var mapStateToProps = (state) => ({counter: state.counter})

var mapDispatchToProps = {
	onIncreaseClick: increaseAction,
	onDecrementClick: decrementAction
}

//connect() 生成容器组件
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)