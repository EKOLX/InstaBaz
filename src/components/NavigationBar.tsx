import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NavigationBarProps {
  title: string;
  leftButtonText?: string;
  onPressLeftButton?: () => void;
}
const NavigationBar: FC<NavigationBarProps> = ({
  title,
  leftButtonText,
  onPressLeftButton,
}) => {
  return (
    <View style={styles.container}>
      {leftButtonText && (
        <TouchableOpacity style={styles.leftButton} onPress={onPressLeftButton}>
          <Text>{leftButtonText}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  leftButton: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
  },
});
