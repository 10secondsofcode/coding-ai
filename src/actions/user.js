
export const loginUser=(email,password,closeModal)=>{
	 let re = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
    
    

	return dispatch=>{
		if (!re.test(email)) {
     	dispatch({type:'FAIL_LOGIN'}) 

    alert("Invalid Credentials !!!");

    }
    if (email === "10seconds@gmail.com" && password === "test@123") {
      alert("Successful Login !!!");
      closeModal();
		dispatch({type:'USER_CURRENT_SET',data:{
			email}})
	}
      
    }
}