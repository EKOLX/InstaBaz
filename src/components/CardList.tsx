import React, { FC } from "react";
import { StyleSheet, FlatList, ListRenderItem } from "react-native";

import CardModel from "../models/Card";
import Card from "./Card";

interface CartListProps {
  items: Array<CardModel>;
  onPressComment: (id: number) => void;
}

const CardList: FC<CartListProps> = ({ items, onPressComment }) => {
  const renderCard: ListRenderItem<CardModel> = ({ item }) => (
    <Card
      fullName={item.author}
      commentCount={item.comments.length}
      image={{ uri: item.imageUri }}
      onPressComment={() => onPressComment(item.id)}
    />
  );

  const keyExtractor = (card: CardModel): string => card.id.toString();

  return (
    <FlatList
      data={items}
      renderItem={renderCard}
      keyExtractor={keyExtractor}
    />
  );
};

export default CardList;

const styles = StyleSheet.create({});
