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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: false,
      viewCompleted: false,
      activeItem: {
        id: 0,
        name: "",
        description: "",
      },
      sectorList: [],
      sectorsToShow: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/sector/")
      .then(res => this.setState({ sectorList: res.data }))
      .catch(err => console.log(err));
  };

  toggleSector = item => {
    console.log(this.state.sectorsToShow);
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

  renderItems = () => {
    return this.state.sectorList.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {item.name}
          <input onClick={() => this.toggleSector(item)} type="checkbox"></input>
      </li>
    ));
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-center my-4"> Modum </h1>
        <div className="row ">
          <div className="col-sm-3">
            <div className="card p-3">
                <h2 className="text-black text-center"> Sectors </h2>
              {/* {this.renderTabList()} */}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;