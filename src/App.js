import React from 'react'
import { Container } from 'react-bootstrap'

import Home from './pages/Home/Home'

const App = () => {
    return (
        <div>
            <main className="py-3">
                <Container>
                <Home />
                </Container>  
            </main>                                  
        </div>
    )
}

export default App