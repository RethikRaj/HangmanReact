import { Route, Routes } from "react-router-dom"
import AppLayout from "../../Pages/Layout/AppLayout"
import StartPage from "../../Pages/StartPage/StartPage"
import PlayPage from "../../Pages/PlayPage/PlayPage"

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<StartPage/>} />
                <Route path="/play" element={<PlayPage/>} />
            </Route>
        </Routes>
    )
}

export default Routing