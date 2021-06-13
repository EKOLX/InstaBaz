import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";

import Feed from "./src/screens/Feed";

export default function App() {
  const commentHandler = () => {
    console.log("CommentHandler pressed");
  };

  return (
    <View style={styles.container}>
      <Feed style={styles.feed} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  feed: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 11,
  },
});
