import { Route, Routes } from "react-router-dom"
import AppLayout from "../../Pages/Layout/AppLayout"
import StartPage from "../../Pages/StartPage/StartPage"

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<StartPage/>} />
                <Route path="/play" element={<StartPage/>} />
            </Route>
        </Routes>
    )
}

export default Routing