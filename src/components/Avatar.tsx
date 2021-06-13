import React, { FC } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface AvatarProps {
  initials: string;
  size: number;
  backgroundColor: string;
}

const Avatar: FC<AvatarProps> = ({ initials, size, backgroundColor }) => {
  const styleContainer: ViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  };

  const styleText = {
    fontSize: size / 2.3,
  };

  return (
    <View style={[styleContainer, styles.container]}>
      <Text style={[styleText, styles.text]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default Avatar;
