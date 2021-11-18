import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/contexts/authContext";
import { WP_GET } from "./WPAPI";
const Posts = () => {
  const { posts, searchQuery, setPosts, setSearching } =
    useContext(AuthContext);

  useEffect(() => {
    (async () => {
      setSearching(true);
      const posts = await WP_GET("search", `?search=${searchQuery}&_embed`);
      setSearching(false);
      setPosts(posts);
    })();
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item: post }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>
              {post._embedded.self[0].excerpt.rendered
                .replace("<p>", "")
                .replace("</p>", "")}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1 },
  post: {
    paddingHorizontal: 12,
    backgroundColor: "#fafafa",
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
