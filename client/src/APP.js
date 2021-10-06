import React from 'react'
import Container from './components/Container'
import Container2 from './components/Container2'
import Pagefooter from './components/Pagefooter'
import './styles/App.css'
function App() {
    return (
        <div className="app-content">
            <Container/>
            <Container2/>
            <Pagefooter/>
        </div>
    )
}

export default App
