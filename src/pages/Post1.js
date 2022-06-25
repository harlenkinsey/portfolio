import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Post1 = () => {

    return (
        <div>
            <Header />
            <div className='background'>
                <div className='post-container white-text center-align'>
                    <div className='row '>
                        <div className='col s12'>
                            <h1>Hello World!</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col s3 border-round' style={{backgroundColor: 'black'}}>
                            <p>June 24, 2022</p>
                            <p>Updated June 25, 2022</p>
                        </div>
                        <div className='col s1'>

                        </div>
                        <div className='col s8 border-round' style={{backgroundColor: 'black'}}>
                        <h4>Purpose</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Post1