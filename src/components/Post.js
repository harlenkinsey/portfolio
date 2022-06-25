import React from 'react';

const Post = ({ title, date, update, sections, texts }) => {

    return (
        <div className='background'>
            <div className='post-container white-text center-align'>
                {sections.map(section => {
                    <div className='white-text'>
                        <h1>{section}</h1>
                        <p>1</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Post