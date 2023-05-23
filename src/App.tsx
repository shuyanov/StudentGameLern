import React from 'react';
import './App.css';
import { Layout } from './Components/Common/Layout';
import { Header } from './Components/Cells/Header/Header';
import { PageOne } from './Components/Organism/PageOne/PageOne';
import { Footer } from './Components/Cells/Footer';
import { Route, Routes } from 'react-router-dom';
import { PageMassage } from './Components/Organism/PageMassage/PageMassage';
import { PagePost } from './Components/Organism/PagePost/PagePost';



function App() {
  return (
    <div className="app">
      <Layout.Header>
        <Header />
      </Layout.Header>

      <Layout.Body>
        <Routes>
          <Route path="/"
            element={<PageOne />} />
          <Route path="/Massage"
            element={<PageMassage />} />
          <Route path="/Post"
            element={<PagePost />} />
        </Routes>
      </Layout.Body>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </div>
  );
}

export default App;
