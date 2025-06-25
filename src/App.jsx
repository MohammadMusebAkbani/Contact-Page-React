import "./App.css";
import ContactForm from "./component/ContactForm/ContactForm";
import ContactHeader from "./component/ContactHeader/ContactHeader";
import Navigation from "./component/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
