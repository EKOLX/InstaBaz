import React, { FC } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";

interface CommentInputProps {
  items: Array<string>;
}

const CommentList: FC<CommentInputProps> = ({ items }) => {
  return (
    <ScrollView>
      {items.map((item, index) => (
        <Text key={index} style={styles.comment}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

export default CommentList;

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
});
