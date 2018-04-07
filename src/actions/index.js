
export const addData = addDelta => {
	return {
		type: 'ADD_DATA',
		addDelta//添加量
	}
};

export const subtract = subtractDelta => {
	return {
		type: 'SUBTRACT_DATA',
		subtractDelta//减少量
	}
}