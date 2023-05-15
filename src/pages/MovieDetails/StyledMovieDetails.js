import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Section = styled.section`
  margin-top: 12px;

  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 6px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  &.active,
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;