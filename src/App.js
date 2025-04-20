import "./styles.css";

export default function App() {
  return (
    <div style={styles.container}>
      <img
        src="https://yt3.googleusercontent.com/98aup-R6uKe0Po_H-_IbBgxrr3SWUFfNNtAQcegGW8aUryi6OfGv3Q0mQ5mbxfkYdCZEH6KC=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" // replace with your image link
        alt="Your Name"
        style={styles.image}
      />
      <h1 style={styles.title}>Hi, I'm Paresh Singh</h1>
      <a
        href="t.me/pareshsinghsupport"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"
          alt="Telegram"
          style={styles.telegramIcon}
        />
        <br />
        Click To Join
      </a>
      <p style={styles.description}>
        Welcome to Paresh Singh Family, your ultimate destination for mastering
        the art of trading! Whether you're a seasoned trader looking to
        fine-tune your strategies or a beginner eager to dive into the world of
        financial markets, this channel is your go-to resource. Join me, Paresh,
        as I break down complex trading concepts into easy-to-understand
        lessons, providing you with practical tips and techniques to navigate
        the markets with confidence. From technical analysis to risk management,
        I cover it all, ensuring you have the knowledge and skills to succeed in
        your trading journey. With a focus on forex, crypto, commodities,
        stocks, options, and more, Paresh Singh Family is your one-stop shop for
        all things trading. Don't miss out on the latest market updates, trading
        tutorials, and insightful discussions that will take your trading game
        to the next level. Subscribe now and embark on your path to trading
        success with Paresh Singh Family!
      </p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#fefefe",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  link: {
    fontSize: "1.2rem",
    color: "#e1306c",
    textDecoration: "none",
    marginBottom: "1rem",
    display: "inline-block",
  },
  description: {
    fontSize: "1rem",
    maxWidth: "600px",
    margin: "1rem auto",
    color: "#333",
  },
  telegramLink: {
    display: "inline-block",
    marginBottom: "1rem",
  },
  telegramIcon: {
    width: "50px",
    height: "50px",
  },
};
