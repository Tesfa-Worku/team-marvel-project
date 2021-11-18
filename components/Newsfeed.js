import React, { useEffect, useState } from 'react';
import { View, Text, Platform, Image } from 'react-native';
import ProfilePage from './ProfilePage';
import { WP_GET } from './WPAPI';


const Newsfeed = () => {
    const [posts,setPosts] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(
        () => {
            WP_GET('posts')
            .then(data => {
                console.log('posts', data);
                setPosts(data);
            })
            WP_GET('members')
            .then(data => {
                console.log('members', data);
                setMembers(data);
            })
        }, 
        []
    )

    const memberById = id => {
        return members.find(member => member.id === id)
    }

    const regex = /<[^>]*>/g;    
    const newestPosts = posts.map((post, index) => (
        <View key={index} style={{marginTop: 10}}>
            <Image 
                style={{width: 30, height: 30}}
            
                source={{uri: memberById(post.author)?.avatar_urls.full.startsWith('https:') ? memberById(post.author).avatar_urls?.full :'https://www.gravatar.com/avatar/?d=identicon'}}
            />

            <Text>
                {memberById(post.author)?.name}
            </Text>

            <Text>
                {post.date}
            </Text>

            <Text>
                {post.excerpt.rendered?.replace(regex,"")}
            </Text>
        </View>
    )
    )

    return (
        <View>
            <Text>Newsfeed</Text>
            {posts?newestPosts: null}
        </View>
    );
};

export default Newsfeed;
