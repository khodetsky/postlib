import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
    text-decoration: none;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
`

export const PostDataContainer = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    padding: 15px;

    font-family: 'Raleway', sans-serif;
    color: black;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${LinkStyled}:hover &, ${LinkStyled}:focus & {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    };
`

export const PostTitle = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
`

export const PostText = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin-top: 10px;
`

