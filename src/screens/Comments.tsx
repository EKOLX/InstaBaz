import React, { FC } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import NavigationBar from "../components/NavigationBar";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";

interface CommentsProps {
  style: {};
  comments: Array<string>;
  onClose: () => void;
  onSubmitComment: (text: string) => void;
}

const Comments: FC<CommentsProps> = ({
  style,
  comments,
  onClose,
  onSubmitComment,
}) => {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftButtonText="Close"
        onPressLeftButton={onClose}
      />
      <CommentInput onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </SafeAreaView>
  );
};

export default Comments;

const styles = StyleSheet.create({});
