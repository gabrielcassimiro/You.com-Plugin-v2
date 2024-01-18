import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";
import { useState } from "react";

const Search = () => {
  const url = "https://you.com/";
  const [question, setQuestion] = useState("");
  const [useChat, setUseChat] = useState(true);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    chrome.tabs.create({ url: getCompleteUrl() });
  }

  function getCompleteUrl() {
    let text = question;
    setQuestion("");
    text.replace(" ", "%20");
    var finalUrl = `${url}search/${text}`;
    if (useChat) finalUrl += "&tbm=youchat";
    return finalUrl;
  }

  return (
    <>
      <form
        className="search-form"
        action="/url"
        method="GET"
        onSubmit={onSubmit}
      >
        <input
          className="search-box"
          type="text"
          placeholder="Ask me anything..."
          value={question}
          onChange={(value) => setQuestion(value.currentTarget.value)}
          required
        />
        <button className="search-button" type="submit">
          <FontAwesomeIcon icon={faArrowUp} size="xl" />
        </button>
      </form>
      <div className="toggle-div">
        <p>Search in You Chat</p>
        <label className="switch">
          <input
            className="use-you-chat-checkbox"
            type="checkbox"
            checked={useChat}
            onChange={(value) => setUseChat(value.currentTarget.checked)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default Search;
