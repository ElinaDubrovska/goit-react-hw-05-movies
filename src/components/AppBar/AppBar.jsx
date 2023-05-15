import {Header, Link} from "components/AppBar/AppBar.styled"
import {StyledList} from "components/commonStyled/CommonStyledList"

const AppBar = () => {
    return  <Header>
        <nav>
            <StyledList>
                <li>
                <Link to ="/">Home</Link>
                </li>
                <li>
                <Link to ="movies">Movies</Link>
                </li>
            </StyledList>
        </nav>
    </Header>
    
}
export default AppBar