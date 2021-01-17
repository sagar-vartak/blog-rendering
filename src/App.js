import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import Home from "./components/Home";
import GetBlogs from "./pages/GetBlogs";
import BlogById from "./components/BlogById";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addBlog" exact component={AddBlog} />
          <Route path="/blogs" exact component={GetBlogs} />
          <Route path="/blog/:_id" exact component={BlogById} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
