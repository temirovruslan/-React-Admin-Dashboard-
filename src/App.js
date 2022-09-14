import "./App.css";
import Home from "./pages/home/Home";
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import List from './pages/list/List'

import { BrowserRouter , Routes, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			 <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New  title="Add New User" />}/>
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New  title="Add New Product" />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
