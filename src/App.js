import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BackEnd from "./Component/BackEnd";
import Mycontext from "./MainContext/MainContext";
import Dashboard from "./Component/BackEnd/Screens/DashBoard/Dashboard";
import DTable from "./Component/BackEnd/Screens/DTable/Dtable";
import FrontEnd from "./Component/FrontEnd";
import Home from "./Component/FrontEnd/Screens/Home";
import About from "./Component/FrontEnd/Screens/About";



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
      
          <Mycontext.Provider
            value={{
              s: this.state.details,
              list: this.state.list,
              clickAdd: this.addClass,
              sideb: this.state.sidebar,
            }}
          >
            <Routes>

              <Route path="/" element={<FrontEnd/>}>
                  <Route index element={<Home/>} />
                  <Route path="/about" element={<About/>} />
              </Route>


              <Route exact path="/admin" element={<BackEnd/>}>
                  <Route index element={<Dashboard/>} />
                  <Route path="table" element={<DTable/>} />
              </Route>
                
              
              
            </Routes>
          </Mycontext.Provider>

      </div>
    );
  }
}

export default App;
