import "./App.css";
import React from "react";
import Main from "./MainComponent";
import Admin from "./Admin/Admin";
import { Routes, Route } from "react-router-dom";
import Mycontext from "./MainContext/MainContext";
import User from "./Screens/Users/Index";
import Layout from "./Components/Layout";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: "",

      details: [
        {
          fullName: "John Doe",
          username: "johndoe",
          region: "EU",
          age: 20,
        },
        {
          fullName: "John Doe",
          username: "johndoe",
          region: "EU",
          age: 20,
        },
        {
          fullName: "John Doe",
          username: "johndoe",
          region: "EU",
          age: 20,
        },
      ],

      list: {
        a: 1,
        b: 2,
      },
    };
  }

  addClass = () => {
    this.state.sidebar
      ? this.setState({ sidebar: "" })
      : this.setState({ sidebar: "active" });
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Mycontext.Provider
            value={{
              s: this.state.details,
              list: this.state.list,
              clickAdd: this.addClass,
              sideb: this.state.sidebar,
            }}
          >
            <Routes>
              <Route exact path="/" element={<Admin />} />
              <Route path="/dashboard" element={<Main />} />
              <Route path="/users" element={<User />} />
            </Routes>
          </Mycontext.Provider>
        </Layout>
      </div>
    );
  }
}

export default App;
