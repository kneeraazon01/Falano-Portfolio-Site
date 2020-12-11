
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route component={Home} path="/" exact={true} />
          <Route component={Projects} path="/projects" />
          <Route component={Resume} path="/resume" />
          <Route component={Blog} path="/blog" />
          <Route component={Contact} path="/contact" />


        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
