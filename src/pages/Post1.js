import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

const Post1 = () => {

    return (
        <div>
            <Header />
            <Post sections={['asdf', 'asfdf', 'asdfsas']} />
            <Footer />
        </div>
    )
}

export default Post1