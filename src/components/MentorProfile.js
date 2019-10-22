import { Component } from 'react'

class MentorProfile extends Component{

    state ={
        mentorID: null
    }

    componentDidMount(){
        console.log(this.props)
    }

}

export default MentorProfile;