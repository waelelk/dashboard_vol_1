import Slidebar from "./components/slidebar";
import ContentLeft from "./Content/ContentLeft";
import ContentRight from "./Content/ContentRight";


function App() {
  return (
    <div className="w-full m-h-screen bg-white flex flex-row">
      <Slidebar />
      <ContentLeft />
      <ContentRight />
    </div>
  );
}

export default App;
