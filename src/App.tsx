import React from 'react';
import AboutPage from "./components/About/";
import ContactsPage from "./components/Contacts";
import HomePage from "./components/Home";
import ProjectsPage from "./components/Projects";

const App = () => (
  <>
    <HomePage/>
    <AboutPage/>
    <ProjectsPage/>
    <ContactsPage/>
  </>
);

export default App;
