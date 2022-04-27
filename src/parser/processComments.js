import doctrine from "doctrine";

const COMMENT_BLOCK = "CommentBlock";

const processComments = (comments, options = { type: COMMENT_BLOCK }) => {
  return comments
    .filter((comment) => comment.type === options.type)
    .map((comment) => {
      return doctrine.parse([comment.value].join("\n"), {
        unwrap: true,
        range: true,
        sloppy: true,
      });
    });
};

export default processComments;
