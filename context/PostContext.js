import React from "react";

export default React.createContext({
  posts: [],
  loadMore: (token, userId) => {}
});
