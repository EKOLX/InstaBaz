import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform, Modal, AsyncStorage } from "react-native";

import { fetchCards } from "./src/utils/helper";
import Feed from "./src/screens/Feed";
import Comments from "./src/screens/Comments";
import Card from "./src/models/Card";

interface FeedState {
  loading: boolean;
  error: boolean;
}

export default function App() {
  const [items, setItems] = useState<Array<Card>>([]);
  const [feed, setFeed] = useState<FeedState>({ loading: true, error: false });
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>();

  const ASYNC_STORAGE_COMMENTS_KEY = "ASYNC_STORAGE_COMMENTS_KEY";

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsFromJson = await AsyncStorage.getItem(
          ASYNC_STORAGE_COMMENTS_KEY
        );

        let items: Array<Card> = [];

        if (itemsFromJson) {
          items = JSON.parse(itemsFromJson);
        } else {
          items = await fetchCards();
        }

        setItems(items);
        setFeed({ loading: false, error: false });
      } catch (err) {
        setFeed({ loading: false, error: true });
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const openCommentScreen = (id: number) => {
    setShowModal(true);
    setSelectedItemId(id);
  };

  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectedItemId(null);
  };

  const onSubmitComment = (text: string) => {
    const itemsCopy: Array<Card> = JSON.parse(JSON.stringify(items));
    itemsCopy.find((i) => i.id === selectedItemId)?.comments.push(text);
    setItems(itemsCopy);

    try {
      const itemsToJson = JSON.stringify(itemsCopy);
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, itemsToJson);
    } catch (err) {
      console.error(err);
    }
  };

  const comments = selectedItemId
    ? Array.from(
        items.find((i) => i.id === selectedItemId)?.comments as Array<string>
      )
    : [];

  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        items={items}
        loading={feed.loading}
        error={feed.error}
        onPressComment={openCommentScreen}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={closeCommentScreen}
      >
        <Comments
          style={styles.comments}
          comments={comments}
          onClose={closeCommentScreen}
          onSubmitComment={onSubmitComment}
        />
      </Modal>
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
  comments: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 11,
  },
});
