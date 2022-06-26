import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

const Post1 = () => {

    return (
        <div>
            <Header />
            <Post 
                title='Hello World!' 
                date='June 24, 2022' 
                update='June 25, 2022'
                sections={['asdf', 'asfdf', 'asdfsas']} 
                texts={['i knew the perc was fake', 'but i still ate it', 'cuz imma grimlin']} />
            <Footer />
        </div>
    )
}

export default Post1