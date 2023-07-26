import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled.div`
    position: absolute;
    left: 20px;
    top: -2px;

    display: inline-flex;
    align-items: center;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        color: black;
        border-color: black;
    }
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    padding: 5px 10px;
    color: #FFFFFF;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${ButtonStyled}:hover &, ${ButtonStyled}:focus & {
        color: black;
    }

    ${ButtonStyled}:has(> &:hover),
    ${ButtonStyled}:has(> &:focus) { 
        border-color: black;
    }
`

export const ButtonArrowSvg = styled.svg`
    margin-right: 5px;
    width: 15px;
    height: 15px;
`

export const ButtonIcon = styled('use')`
    stroke: none;
    fill: #FFFFFF;
    width: 15px;
    height: 15px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${ButtonStyled}:hover &, ${ButtonStyled}:focus & {
        fill: black;
    };
`