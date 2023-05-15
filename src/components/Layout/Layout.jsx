import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import {Container} from "components/Layout/Layout.styled"
import AppBar from "components/AppBar/AppBar"
const Layout = () => {
    return <Container>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
              <Outlet /> 
         </Suspense>
         
     </Container>
}

export default Layout