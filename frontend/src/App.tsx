import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Blog } from "./pages/Blog"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup/>} />
          <Route path="signin" element={<Signin/>} />
          <Route path="blog/:id" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
