import { Route,Routes } from "react-router-dom"
import { Dashboard } from "../screens"


export const PublicRoutes = () => {
    return (
        <>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
          </Routes>
        </>
    )
}