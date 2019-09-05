import React from "react";

import AuthContext from '../context/AuthContext';
import PostContext from '../context/PostContext';

import Pagination from '../components/Pagination/Pagination';
const postsPerPage = 20;

class Posts extends React.Component {
 
  static contextType = AuthContext; 
  state = {
    isLoading: false,
    posts: [],
    postsVisible: postsPerPage
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    this.setState( { isLoading: true} );

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ 
        posts:  data, 
        isLoading: false
    }));
  } 

  loadMore = () => {
    this.setState(prev => {
      return{ postsVisible: prev.postsVisible + postsPerPage }
    })
  }

  render() {
    const {  isLoading, posts, postsVisible } = this.state;
    console.log(postsVisible);
    return (
      <PostContext.Provider value={{
        posts: posts,
        loadMore: this.loadMore,
        postsVisible: postsVisible
      }}>
      <div className="posts">
        {
          isLoading ? <div class="loading">Loading...</div> : 
          <ul>
          {
            posts.slice(0, postsVisible).map(post => (
            <li key={post.id}>
              <div className="post_content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </li>
            ))
          }

          </ul>
        }
      </div>
      <Pagination />
      </PostContext.Provider>
    )
  }
}

export default Posts;