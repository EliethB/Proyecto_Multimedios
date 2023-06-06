import React from "react";
import Navbar from "./components/navbar";
import Cuerpo from "./components/Cuerpo";
import CarrouselComponent from "./components/CarrouselComponent";
import TabBar from "./components/TabBar";
import InformationBody  from "./components/InformationBody";
import Album  from "./components/Album";
function App(){
  return(
   <div>
    <Navbar/>
    <Cuerpo/>
    <InformationBody/>
    <CarrouselComponent/>
    <Album/>
   <TabBar/>
   </div>
   
  );
}
export default App;
