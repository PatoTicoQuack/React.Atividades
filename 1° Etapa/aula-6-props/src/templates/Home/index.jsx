import { Component } from 'react'; // importando o Component do react

import './style.css';

import {Posts} from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';

export class Home extends Component {
    state = { // o state é um objeto
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2
    };

  async componentDidMount() { // método que é chamado assim que o componente é montado
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const{
      posts,
      allPosts,
      page,
      postsPerPage
    } = this.state;
    
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className="button-container">
          <Button 
          text="Load more posts"
          quandoClica={this.loadMorePosts}
          disabled={noMorePosts} 
          />
        </div>
      </section>
    );
  }
}
