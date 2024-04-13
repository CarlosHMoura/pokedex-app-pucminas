import styled from "styled-components/native";
import theme from "../../theme";

export const UserView = styled.View`
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

// FORM ------------------------------------------------------------------------------------------------------
export const FormContainer = styled.View`
    width: 95%;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color : ${() => theme.colors.white};
    border-radius: 30px;
`;

export const FormItem = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const FormInput = styled.TextInput`
    align-items: center;
    width: 70%;
    height: 24px;
    padding: 0px 16px;
    background-color : ${() => theme.colors.pureWhite};
    color: ${() => theme.colors.darkGrey};
    border-radius: 10px;
`;

// TEXT ------------------------------------------------------------------------------------------------------
export const Text = styled.Text`
    font-size: 14px;
    color: ${theme.colors.darkGrey};
    margin-bottom: 5px;
`;

export const BoldText = styled.Text`
    font-size: 14px;
    color: ${theme.colors.darkGrey}; 
    font-weight: bold;
`;

export const ErrorText = styled.Text`
    font-size: 10px;
    color: ${() => theme.colors.red};
    font-style: italic;
`;