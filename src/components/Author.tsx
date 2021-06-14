import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { getColorByUserName, getInitials } from "../utils/helper";
import Avatar from "./Avatar";

interface AuthorProps {
  fullName: string;
  commentText: string;
  onPressComment: () => void;
}

const Author: FC<AuthorProps> = ({ fullName, commentText, onPressComment }) => {
  return (
    <View style={styles.container}>
      <Avatar
        initials={getInitials(fullName)}
        size={44}
        backgroundColor={getColorByUserName(fullName)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>
      <TouchableOpacity onPress={onPressComment}>
        <Text numberOfLines={1}>{commentText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Author;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
});
