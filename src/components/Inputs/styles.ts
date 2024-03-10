import styled from 'styled-components/native';
import theme from "../../theme";

export const Container = styled.TextInput`
    width: 90%;
    height: 40px;
    padding: 0px 16px;
    margin-top: 10px;
    background-color: #ffffff;
    color: ${() => theme.colors.darkGrey};
    border-radius: 50px;
`;