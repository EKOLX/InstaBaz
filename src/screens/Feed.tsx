import React, { FC, useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  SafeAreaView,
} from "react-native";

import CardList from "../components/CardList";
import Card from "../models/Card";
import { fetchCards } from "../utils/helper";

interface FeedProps {
  style: {};
}

const Feed: FC<FeedProps> = ({ style }) => {
  const [feed, setFeed] = useState({ loading: true, error: false });
  const [items, setItems] = useState<Array<Card>>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const items = await fetchCards();
        setFeed({ loading: false, error: false });
        setItems(items);
      } catch (er) {
        setFeed({ loading: false, error: true });
      }
    }

    fetchData();
  }, []);

  if (feed.loading) {
    return <ActivityIndicator size="large" />;
  }

  if (feed.error) {
    return <Text>Error...</Text>;
  }

  return (
    <SafeAreaView style={style}>
      <CardList cards={items} />
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({});
