import './App.css';
import React from 'react';

import ResponsiveAppBar from "./templates/header";
import BottomAppBar from "./templates/bottom";
import FileClaim from "./templates/fileClaim";


export default function App() {
  return (<>
    <ResponsiveAppBar />
    <FileClaim />
    <BottomAppBar />
  </>)
}
