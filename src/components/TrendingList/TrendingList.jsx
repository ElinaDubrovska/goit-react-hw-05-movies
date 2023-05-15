import { NavLink } from "react-router-dom"
import { StyledList } from "components/commonStyled/CommonStyledList"
import { StyledListItem } from "components/commonStyled/CommonStyledListItem"
import PropTypes from 'prop-types';
const TrendingList = ({ trends }) => {
    return   <StyledList>
        {trends.map(({title, id}) => {
            return <StyledListItem key={id}>
                <NavLink to={`/movies/${id}`}>{title}
                </NavLink>
            </StyledListItem>
        })}
    </StyledList>
}

export default TrendingList 

TrendingList.propTypes = {
    trends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
    }))
}