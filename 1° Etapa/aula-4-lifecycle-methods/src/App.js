import './App.css';
import { Component } from 'react'; // importando o Component do react

class App extends Component {
    state = { // o state é um objeto
      counter: 0,
      posts: [
        {
          id: 1,
          title: 'O título 1',
          body: 'O corpo 1'
        },
        {
          id: 2,
          title: 'O título 2',
          body: 'O corpo 2'
        },
        {
          id: 3,
          title: 'O título 3',
          body: 'O corpo 3'
        }
      ]
    };

  componentDidMount() { // método que é chamado assim que o componente é montado
    this.handleTimeout();
  }
  
  componentDidUpdate = () => { // método que é chamado assim que o componente é atualizado
    this.handleTimeout();
  }

  componentWillUnmount = () => { // método que é chamado assim que o componente é desmontado
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O título mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1});
    }, 1000);
  }


  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}


export default App;
