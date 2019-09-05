import React from "react";

import PostContext from '../../context/PostContext';

const MainNavigation = () => {
  return (
   <PostContext.Consumer>
    {context => {
      return(<div className="load-more-action">
        {
          context.postsVisible < context.posts.length &&
          <button  onClick={context.loadMore}>Load More</button>
        }
      </div>
      )
    }}
    </PostContext.Consumer>
  )
};

export default MainNavigation;