// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// frontend/src/App.js

import React, { Component } from "react";
// import Modal from "./components/Modal";
import axios from "axios";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // modal: false,
//       viewCompleted: false,
//       activeItem: {
//         id: 0,
//         name: "",
//         description: "",
//         trust_index: 0.00
//       },
//       countryList: []
//     };
//   }

//   componentDidMount() {
//     this.refreshList();
//   }

//   refreshList = () => {
//     axios
//       .get("http://localhost:8000/api/country/")
//       .then(res => this.setState({ countryList: res.data }))
//       .catch(err => console.log(err));
//   };

//   toggle = () => {
//     this.setState({ modal: !this.state.modal });
//   };

//   handleSubmit = item => {
//     this.toggle();
//     if (item.id > 0) {
//       axios
//         .put(`http://localhost:8000/api/country/${item.id}/`, item)
//         .then(res => this.refreshList());
//       return;
//     }
//     axios
//       .post("http://localhost:8000/api/country/", item)
//       .then(res => this.refreshList());
//   };

//   handleDelete = item => {
//     axios
//       .delete(`http://localhost:8000/api/country/${item.id}`)
//       .then(res => this.refreshList());
//   };

//   createItem = () => {
//     const item = { id: 0, name: "", description: "", trust_index: 0.00 };
//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };

//   editItem = item => {
//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };

//   displayCountry = id => {
//     if (id) {
//       return this.setState({ viewCompleted: true });
//     }
//     return this.setState({ viewCompleted: false });
//   };

//   renderTabList = () => {
//     return (
//       <div className="my-5 tab-list">
//         <span
//           onClick={() => this.displayCountry(true)}
//           className={this.state.viewCompleted ? "active" : ""}
//         >
//           complete
//         </span>
//         <span
//           onClick={() => this.displayCountry(false)}
//           className={this.state.viewCompleted ? "" : "active"}
//         >
//           Incomplete
//         </span>
//       </div>
//     );
//   };

//   renderItems = () => {
//     // const { viewCompleted } = this.state;
//     const newItems = this.state.countryList.filter(
//       item => item.id > 0
//     );
//     return newItems.map(item => (
//       <li
//         key={item.id}
//         className="list-group-item d-flex justify-content-between align-items-center"
//       >
//         <span
//           className={`todo-title mr-2 ${
//             this.state.viewCompleted ? "completed-todo" : ""
//           }`}
//           title={item.description}
//         >
//           {item.name}
//         </span>
//         <span>
//           <button onClick={() => this.editItem(item)} className=" btn btn-secondary mr-2"> Edit </button>
//           <button onClick={() => this.handleDelete(item)} className=" btn btn-danger"> Delete </button>
//         </span>
//       </li>
//     ));
//   };

//   render() {
//     return (
//       <main className="content">
//         <h1 className="text-white text-center my-4">Country Application</h1>
//         <div className="row ">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <div className="">
//                 <button onClick={this.createItem} className="btn btn-primary">Add Country</button>
//               </div>
//               {this.renderTabList()}
//               <ul className="list-group list-group-flush">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//         {this.state.modal ? (
//               <Modal
//                 activeItem={this.state.activeItem}
//                 toggle={this.toggle}
//                 onSave={this.handleSubmit}
//               />
//             ) : null}
//       </main>
//     );
//   }
// }


import Loader from 'react-loader-spinner'
import NavBar from "./components/Navbar";
import Graph from './graph.png';
import Blank from './blank.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: false,
      graphRequested: false,
      graphLoading : false,
      viewCompleted: false,
      activeItem: {
        id: 0,
        name: "",
        description: "",
      },
      sectorList: [],
      sectorsToShow: [],
      measureList: [],
      measuresToShow: [],
      countryList: [],
      countriesToShow: []
    };
  }

  componentDidMount() {
    this.refreshSectorList();
    this.refreshMeasureList();
    this.refreshCountryList();
  }

  refreshSectorList = () => {
    axios
      .get("http://localhost:8000/api/sector/")
      .then(res => this.setState({ sectorList: res.data }))
      .catch(err => console.log(err));
  };

  refreshMeasureList = () => {
    axios
      .get("http://localhost:8000/api/measure/")
      .then(res => this.setState({ measureList: res.data }))
      .catch(err => console.log(err));
  };

  refreshCountryList = () => {
    axios
      .get("http://localhost:8000/api/country/")
      .then(res => this.setState({ countryList: res.data }))
      .catch(err => console.log(err));
  };

  toggleSector = item => {
    const idd = item.id;
    if (this.state.sectorsToShow.filter(item => item.id === idd).length) {
      const items = this.state.sectorsToShow.filter(item => item.id !== idd);
      this.setState({ sectorsToShow: items });
      return;
    }
    this.setState(
      { sectorsToShow: [...this.state.sectorsToShow, item] }
    )
  };

  toggleMeasure = item => {
    const idd = item.id;
    if (this.state.measuresToShow.filter(item => item.id === idd).length) {
      const items = this.state.measuresToShow.filter(item => item.id !== idd);
      this.setState({ measuresToShow: items });
      return;
    }
    this.setState(
      { measuresToShow: [...this.state.measuresToShow, item] }
    )
  };

  toggleCountry = item => {
    const idd = item.id;
    if (this.state.countriesToShow.filter(item => item.id === idd).length) {
      const items = this.state.countriesToShow.filter(item => item.id !== idd);
      this.setState({ countriesToShow: items });
      return;
    }
    this.setState(
      { countriesToShow: [...this.state.countriesToShow, item] }
    )
  };

  sendGraphRequest = () => {
    this.setState({ graphRequested: false });
    this.setState({ graphLoading: true });
    setTimeout(() => { // TODO - querry backend for the image.
      axios
      .get("http://localhost:8000/dashboard/graph")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
      this.setState({ graphLoading: false });
      this.setState({ graphRequested: true });
    }, 2000);
  }

  renderSectors = () => {
    const isSectorActive = this.state.sectorList.map(item => (this.state.sectorsToShow.includes(item)));
    return this.state.sectorList.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <button onClick={() => this.toggleSector(item)} type="button" className={`btn ${isSectorActive[item.id - 1] ? "btn-success" : "btn-info"} btn-block`}> {item.name}  </button>
      </li>
    ));
  };

  renderMeasures = () => {
    const isMeasureActive = this.state.measureList.map(item => (this.state.measuresToShow.includes(item)));
    return this.state.measureList.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <button onClick={() => this.toggleMeasure(item)} type="button" className={`btn ${isMeasureActive[item.id - 1] ? "btn-success" : "btn-info"} btn-block`}> {item.description}  </button>
      </li>
    ));
  };

  renderCountries = () => {
    const isCountryActive = this.state.countryList.map(item => (this.state.countriesToShow.includes(item)));
    return this.state.countryList.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <button onClick={() => this.toggleCountry(item)} type="button" className={`btn ${isCountryActive[item.id - 2] ? "btn-success" : "btn-info"} btn-block`}> {item.name}  </button>
      </li>
    ));
  };

  render() {
    const loading = this.state.graphLoading;
    return (
      <main className="content">
        <NavBar/>
        <div className="row">
          <div id="sect" className="col-sm-3">
            <div className="card p-4">
                <h2 id="sector-title" className="text-black text-center"> Sectors </h2>
              <ul className="list-group list-group-flush">
                {this.renderSectors()}
              </ul>
            </div>
            <button onClick={this.sendGraphRequest} id="g-graph" type="button" className="btn-link" disabled={loading}>
               Generate Graph
            </button>
            <div id="loady">
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                visible={this.state.graphLoading}
                // visible={true}
              />
            </div>
          </div>
        </div>        
        <div>
          <img id="im" src={`${this.state.graphRequested ? Graph : Blank}`}  alt="graph"/>
        </div>
        <div className="row">
          <div id="meas" className="col-sm-3">
            <div className="card p-4">
                <h2 id="sector-title" className="text-black text-center"> Measures </h2>
              <ul className="list-group list-group-flush">
                {this.renderMeasures()}
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div id="count" className="col-sm-3">
            <div className="card p-4">
                <h2 id="sector-title" className="text-black text-center"> Countries </h2>
              <ul className="list-group list-group-flush">
                {this.renderCountries()}
              </ul>
            </div>
          </div>
        </div>

      </main>
    );
  }
}

export default App;