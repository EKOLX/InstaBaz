import React, { FC, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
  ActivityIndicator,
} from "react-native";

import Author from "./Author";

interface CardProps {
  fullName: string;
  image: ImageSourcePropType;
  onPressComment: () => void;
}

const Card: FC<CardProps> = ({ fullName, image, onPressComment }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View>
      <Author fullName={fullName} onPressComment={onPressComment} />
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size={"large"} />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={() => setLoading(false)}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
});
