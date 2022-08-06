import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
    height: ${RFValue(56)}px;

    background-color: ${({ theme }) => theme.COLORS.SHAPE};
    border-radius: 12px;

    align-items: center;
    flex-direction: row;

    margin-top: 30px;
`;


export const ImageContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;

    padding: ${RFValue(16)}px;
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-right-width: 1px;
`;


export const Text = styled.Text`
    flex:1;
    text-align: center;

    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size:  ${RFValue(16)}px;
`;