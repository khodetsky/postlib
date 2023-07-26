import styled from "styled-components";

export const HeaderDataBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    max-width: 1280px;

    @media screen and (max-width: 572px) {
        justify-content: flex-end;
    }
`

export const Title = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 28px;
    color: #FFF;

    @media screen and (max-width: 472px) {
        font-size: 24px;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    padding: 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;

    // @media screen and (min-width: 768px) {
    //   width: 100%;
    // }
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
`

export const CommentDataContainer = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    padding: 15px;

    font-family: 'Raleway', sans-serif;
    color: black;
`

export const CommentTitle = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
`

export const CommentText = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin-top: 10px;
`