import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";



function App() {
  return (
    <div className="App bg-[#F0F2F5]">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
