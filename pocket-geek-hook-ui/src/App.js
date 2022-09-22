import './App.css';
import React from 'react';

import ResponsiveAppBar from "./templates/header";
import BottomAppBar from "./templates/bottom";
import FileClaim from "./templates/fileClaim";
import Stepper from "./templates/stepper"


export default function App() {
  return (<>
    <ResponsiveAppBar />
    <Stepper/>
    {/* <FileClaim /> */}
    <BottomAppBar />
  </>)
}
