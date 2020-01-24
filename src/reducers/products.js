
const defaultState={
	data:[],
	loading:false,
	error:null
}

 const products=(state=defaultState,action)=>{
	const {type} = action;
	switch (type){
		case 'FETCHING_PRODUCTS':
			return {
				data:[],
				loading:true,
				error:null
			}	
		break;
		case 'SET_PRODUCTS':
			const {data} = action;
			return {
				data,
				loading:false,
				error:null
			}
		break;
		case 'FETCH_PRODUCTS_FAIL':
			const {error} = action;
			return {
				data:[],
				loading:false,
				error
			}
		break;
		default:

		return state;
	}
}
export default products;