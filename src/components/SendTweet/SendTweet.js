import React from 'react';
import superagent from 'superagent';

function SendTweet(props) {

    const [message, setMessage] = React.useState('');
    const [color, setColor] = React.useState('');

    const handleInput = (event) => {
        setMessage(event.target.value);
    }

    const handleInputColor = (event) => {
        setColor(event.target.value);
    }

    const handleClick = () => {
        superagent
            .post('http://192.168.115.16:1337/tweets')
            .send({ text: message, background: color })
            .then(response => {
                console.log(response);
                props.onSend();
            });
    }

    return (
        <div>
            <textarea onInput={handleInput}></textarea>
            <input type="color" onChange={handleInputColor} />
            <input type="file" />

            <button onClick={handleClick}>Enviar</button>
        </div>
    );
}

export default SendTweet;