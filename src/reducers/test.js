const initialState = {
	data : 0
}

const test = (state = initialState, action)=>{
	switch (action.type) {
		case 'ADD_DATA':
			console.log(state);
			return {
				data : state.data + action.addDelta
			}
		case 'SUBTRACT_DATA':
			return {
				data : state.data + action.addDelta
			}
		default:
			return state;
	}
};

export default test;