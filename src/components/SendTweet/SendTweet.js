import React from 'react';
import superagent from 'superagent';

function SendTweet(props) {
    
    const [message, setMessage] = React.useState('');

    const handleInput = (event) => {
        setMessage(event.target.value);
    }

    const handleClick = () => {
        superagent
            .post('http://192.168.115.16:1337/tweets')
            .send({ text: message })
            .then(response  =>{
                console.log(response);
            });
    }

    return (
        <div>
            <textarea onInput={handleInput}></textarea>
            <button onClick={handleClick}>Enviar</button>
            {message}
        </div>
    );
}

export default SendTweet;