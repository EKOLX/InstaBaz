import React, { FC, ReactElement } from "react";
import { StyleSheet, FlatList, ListRenderItem } from "react-native";

import { getImageFromId } from "../utils/helper";
import CardModel from "../models/Card";
import Card from "./Card";

interface CartListProps {
  cards: Array<CardModel>;
}

const CardList: FC<CartListProps> = ({ cards }) => {
  const renderCard: ListRenderItem<CardModel> = ({ item }) => (
    <Card
      fullName={item.author}
      image={{ uri: item.imageUri }}
      onPressComment={() => {}}
    />
  );

  const keyExtractor = (card: CardModel): string => card.id.toString();

  return (
    <FlatList
      data={cards}
      renderItem={renderCard}
      keyExtractor={keyExtractor}
    />
  );
};

export default CardList;

const styles = StyleSheet.create({});
