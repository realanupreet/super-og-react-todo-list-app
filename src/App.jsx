import "./styles.css";
import "animate.css";
import CatFact from "./CatFact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from "./TodoList";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import Form from "./Form";
export const AppContext = createContext();

const App = () => {
  const client = new QueryClient();
  const msg404 = <h1>404 page</h1>;
  const home = <h1>Home page</h1>;
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <AppContext.Provider value={{ username }}>
        <QueryClientProvider client={client}>
          <Router>
            <h3>NAVBAR </h3>
            <p>
              <Link to="/">Home</Link>
              <Link to="/cat">CatFact</Link>
              <Link to="/todo">TodoList</Link>
            </p>
            <Routes>
              <Route path="/cat" element={<CatFact />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/form" element={<Form />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={msg404} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
};

export default App;
