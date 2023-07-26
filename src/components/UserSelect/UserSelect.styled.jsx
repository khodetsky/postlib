import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const FilterLabel = styled.label`
    display: inline-block;
    color: #000;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;

    margin-right: 10px;
`

export const Select = styled.select`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;

    color: #000;
    background: none; 
    border-radius: 8px;
    border: 1px solid #000;
    padding-left: 5px;
    cursor: pointer;

    &:focus {
      color: black;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`