import React, { useEffect } from 'react';
import PostCard from './PostCard';

const CardContainer = () => {

    return (
        <div className='background'>
            <div className='row card-container'>
                <div className='col s12'>
                    <PostCard title='Hello World!' description='Started the blog!' link='/hello-world' date='Jun 24, 2022'/>
                </div>
            </div>

        </div>
    )
}

export default CardContainer
