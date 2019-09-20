import React from 'react';
import './App.css';
import Tweet from './components/Tweet/Tweet';
import SendTweet from './components/SendTweet/SendTweet';
export const server = 'http://192.168.115.16:1337';

function App() {
  const [tweets, setTweets] = React.useState([]);

  /*Cada que el estado o propiedad cambia React se renderiza again
  useEffect → Hagalo una sola vez y no lo haga más en este caso con el arreglo vacío apenas carga el componente
  */

  React.useEffect(() => {
    getTweets();
  }, []);

  const getTweets = () => {
    fetch(server + '/tweets?_sort=created_at:DESC')
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        setTweets(info);
        console.log(info);
      });
  }

  return (
    <div className="App">

      <SendTweet onSend={getTweets} />

      {tweets.map((item) => {
        return <Tweet key={item.id}
          text={item.text}
          background={item.background}
          media={item.media} />
      })}

    </div>
  );
}

export default App;
