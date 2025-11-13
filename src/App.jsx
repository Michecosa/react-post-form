const endpointUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Form endpoint={endpointUrl} />
      </div>
    </>
  );
}

export default App;
