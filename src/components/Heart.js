import React, { useState, useEffect } from 'react';

function Heart (props) {
    const [ likeCount, setLikeCount ] = useState(0);

    useEffect(() => {
        getLikeCountForMentor(props.name);
    }, []);

    function getLikeCountForMentor (mentorName) {
        const mentorLikeCount = localStorage.getItem(`${mentorName}_likeCount`);
        if (mentorLikeCount) {
            setLikeCount(parseInt(mentorLikeCount));
        }
    }

    function setLikeCountToLocalStorage () {
        setLikeCount(likeCount + 1)
        localStorage.setItem(`${props.name}_likeCount`, likeCount + 1);
    }

    return (
        <div className='heart-container' onClick={setLikeCountToLocalStorage}>
            <div className='heart'>&#x2665;</div>
            <div className='like-count'>{likeCount}</div>
        </div>
    );
}

export default Heart;