import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import  { TextInput } from 'react-native';

interface Props{
    isFocused: boolean;
}

export const Container = styled.View`
    flex-direction: row;

    margin-bottom: 8px;

    
`;

export const IconContainer = styled.View<Props>`
    height: 56px;
    width: 55px;
    justify-content: center;
    align-items: center;

    margin-right: 2px;
    border-radius: 7px;

    background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};

    ${({ isFocused, theme }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.SHAPE};
    `};
`;

export const InputText = styled(TextInput).attrs<Props>(({ theme, type }) => ({
    placeholderTextColor: theme.COLORS.SHAPE
}))<Props>`
    flex: 1;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
    color: ${({ theme }) => theme.COLORS.SHAPE};
    font-family: ${({ theme }) => theme.FONTS.TEXT}
    font-size: ${RFValue(15)}px;

    padding: 0 23px;

    ${({ isFocused, theme }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.COLORS.BACKGROUND};
    `};
`;