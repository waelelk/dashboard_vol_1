import Slidebar from "./components/slidebar";
import ContentRight from "./Content/ContentRight";


function App() {
  return (
    <div className="w-full m-h-screen bg-white flex flex-row">
      <Slidebar />
      <section className="flex-1">Left</section>
      <ContentRight />
    </div>
  );
}

export default App;
