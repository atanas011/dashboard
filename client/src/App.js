import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './dashboard/components/Layout'
import AdminIndex from './dashboard/pages/AdminIndex'
import WriterIndex from './dashboard/pages/WriterIndex'
import NotFound from './dashboard/pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='admin' element={<AdminIndex />} />
          <Route path='writer' element={<WriterIndex />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
