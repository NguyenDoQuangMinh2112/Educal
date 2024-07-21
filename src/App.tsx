import { Route, Routes } from 'react-router-dom'
import Public from './pages/Public/Public'
import Home from './pages/Home/Home'
import CourseDescription from './pages/CourseDescription/CourseDescription'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/course/c" element={<CourseDescription />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
