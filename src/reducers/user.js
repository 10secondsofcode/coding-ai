const defaultState={
	data:{},
	isAuthenticated:false,
	error:false
};


const user = (state=defaultState,action)=>{
	const {type}=action;

	switch(type){
		case 'USER_CURRENT_SET':
	      return {
	        isAuthenticated: true,
	        user: action.user
	      }
	      break;
	     case 'FAIL_LOGIN':
	     	return {
	     		isAuthenticated:false,
	     		error:true,
	     		user:{}

	     	}
	     break;
	  

    default:
      return state
	}
};

export default user;
