import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Home from './Pages/Home/index'
import Links from './Pages/Links/index'
import Error from './Pages/Error/index'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/links' element={<Links />} />
                <Route path='*' element={<Error />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp