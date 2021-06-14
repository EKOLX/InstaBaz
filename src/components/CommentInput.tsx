import React, { FC, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface CommentInputProps {
  onSubmit: (text: string) => void;
}
const CommentInput: FC<CommentInputProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const textChangeHandler = (value: string) => {
    setText(value);
  };

  const submitEditingHandler = () => {
    if (!text) {
      return;
    }

    onSubmit(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={textChangeHandler}
        onSubmitEditing={submitEditingHandler}
        placeholder={"enter comment..."}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default CommentInput;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 20,
    height: 60,
  },
  input: { flex: 1 },
});
