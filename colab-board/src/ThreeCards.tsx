import "./ThreeCards.css";

function Message() {
  return (
    <>
      <div className="card-container">
        <div className="message-card">
          <h1>Hello Worm!</h1>
          <p>This is an example simple React Component!</p>
          <button onClick={() => alert("Hello Worm!")}>Say Hello!</button>
        </div>

        <div className="message-card">
          <h1>Hello Worm!</h1>
          <p>This is an example simple React Component!</p>
          <button onClick={() => alert("Hello Worm!")}>Say Hello!</button>
        </div>

        <div className="message-card">
          <h1>Hello Worm!</h1>
          <p>This is an example simple React Component!</p>
          <button onClick={() => alert("Hello Worm!")}>Say Hello!</button>
        </div>
      </div>
    </>
  );
}

export default Message;
