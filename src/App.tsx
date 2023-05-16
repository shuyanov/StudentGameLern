import React from 'react';
import './App.css';
import { Layout } from './Components/Common/Layout';
import { Header } from './Components/Cells/Header/Header';
import { PageOne } from './Components/Organism/PageOne/PageOne';
import { Footer } from './Components/Cells/Footer';



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
        {/* <Footer /> */}
      </Layout.Footer>
    </div>
  );
}

export default App;
