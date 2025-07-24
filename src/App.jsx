// import NetflixSerires from "./components/NetflixSerires";  // default import/export
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
// import RegistrationForm from "./components/RegistrationForm";
// import TodoList from "./components/TodoList";
import PokemonList from "./components/PokemonList";
// import { EventHandling } from "./components/Eventhandling";
// import { NetflixSerires } from "./components/NetflixSerires"; //named import/export
// import MyDataTable from "./components/MyDataTable"; // default import/export

// import {Hooks} from "./components/UseState/Hooks";
// import NetflixSerires, {Footer} from "./components/NetflixSerires";  // combined import/export
// import ToggleSwitch from "./components/ToggleSwitch";



export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {/* <NetflixSerires /> */}
      {/* <NetflixSerires />
      <NetflixSerires />
      <NetflixSerires />
      <NetflixSerires />
      <Footer /> */}
      {/* <EventHandling /> */}

      {/* <MyDataTable />  */}

      {/* <Hooks /> */}

     
      {/* <ToggleSwitch /> */}
      {/* <TodoList /> */}
      {/* <RegistrationForm /> */}
      <h1 style={{ margin: "34px" }}>Pokemon Explorer</h1> 


      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PokemonList searchTerm={searchTerm} />
    </>
  );
};

// IMPORT KARWANE KA LIYE WE USE CTRL+SPACE THEN PRESS ENTER TO IMPORT
//Default import/export
// Named import/export
// combined import/export
