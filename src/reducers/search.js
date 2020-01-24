const defaultState = {
	target:'',
	data:[],
	isSearching:false
}

const search = (state=defaultState,action)=>{
	const {type} = action;
	switch(type){
		case "PERFORMING_SEARCH":
			return {
				target:action.target,
				data:[],
				isSearching:true
			}
		break;
		case "SET_DATA":
			return {
				target:action.target,
				data:action.data,
				isSearching:false
			}
		break;
		default:
			return state;


	}
}

export default search;