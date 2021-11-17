import React, { useContext, useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/contexts/authContext";
import { WP_GET } from "./WPAPI";

const Users = () => {
    const { posts, searchQuery, setPosts, setSearching } = useContext(AuthContext);
    useEffect(() => {
        (async () => {
            if (searchQuery) {
                setSearching(true);
                const posts = await WP_GET("posts", `?search=${searchQuery}`);
                console.log({ posts });
                setSearching(false);
                setPosts(posts);
            }
        })();
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(user) => user.id.toString()}
                ListEmptyComponent={
                    <View>
                        <Text>Not found</Text>
                    </View>
                }
                renderItem={({ item: post }) => (
                    <View style={styles.post}>
                        <Text style={styles.title}>{post.title.rendered}</Text>
                        <Text>
                        {post.excerpt.rendered.replace("<p>", "").replace("</p>", "")}
                        </Text>
                        {/* <Image
                                        width={96}
                                        height={96}
                                        style={{ width: 96, height: 96 }}
                                        source={{
                                            uri: post.avatar_urls?.['96'].startsWith(
                                                'https:'
                                            )
                                                ? post.avatar_urls?.['96']
                                                : 'https://www.gravatar.com/avatar/?d=identicon',
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.title}>{post.name}</Text> */}
                    </View>
                )}
            />
        </View>
    );
    };
export default Users;

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#fff", 
        flex: 1 
    },
    post: {
        paddingHorizontal: 12,
        backgroundColor: "#FAFAFA",
        marginVertical: 6,
        padding: 12,
        marginHorizontal: 12,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        paddingBottom: 6,
    },
});