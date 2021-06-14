import React, { FC } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  SafeAreaView,
} from "react-native";

import CardList from "../components/CardList";
import Card from "../models/Card";

interface FeedProps {
  style: {};
  items: Array<Card>;
  loading: boolean;
  error: boolean;
  onPressComment: (id: number) => void;
}

const Feed: FC<FeedProps> = ({
  style,
  items,
  loading,
  error,
  onPressComment,
}) => {
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error...</Text>;
  }

  return (
    <SafeAreaView style={style}>
      <CardList items={items} onPressComment={onPressComment} />
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({});
