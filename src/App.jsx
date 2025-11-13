const endpointUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Form endpoint={endpointUrl} />
    </>
  );
}

export default App;
