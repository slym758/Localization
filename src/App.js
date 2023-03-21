import "./App.css";
import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "3 Yeni mesajınız var",
  },
  "en-US": {
    title: "Hello World",
    description: "You have 3 new messages",
  },
};

function App() {
  const isLocale = localStorage.getItem("locale");
  const defeaultLocale = isLocale ? isLocale : navigator.language;
  const [lang, setLang] = useState(defeaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", lang);
  }, [lang]);
  return (
    <div className="App">
      <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" />
        </p>
        <br />
        <br />

        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
