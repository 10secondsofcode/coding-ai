export const performSearch = (target)=>{
		return dispatch=>{
			console.log(target)
			dispatch({type:'SET_DATA',target:target,data:[]})
		}
}