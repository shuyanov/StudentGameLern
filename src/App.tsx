import React from 'react';
import './App.css';
import { Layout } from './Components/Common/Layout';
import { Header } from './Components/Cells/Header/Header';
import { PageOne } from './Components/Organism/PageOne/PageOne';



function App() {
  return (
    <div className="app">
      <Layout.Header>
        <Header />
      </Layout.Header>

      <Layout.Body>
        <PageOne />
      </Layout.Body>

      <Layout.Footer>
      </Layout.Footer>
    </div>
  );
}

export default App;
