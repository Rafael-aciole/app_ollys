import styled from "styled-components";
import { Entypo } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT,
    start: { x: 1, y: 0 },
    end: { x: 0.7, y: 0.9 }
}))`
    flex: 1;
    justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 48
    },
})`
    width: 100%;
    padding: 0 22px;
`;

export const Header = styled.View`
    padding-top: 55px;
    width: 100%;
    height: ${RFPercentage(20)}px;
    background-color: ${({ theme }) => theme.COLORS.GRADIENT};
`;

export const UserWrapper = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.COLORS.SHAPE};
    margin-top: 5px;
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.COLORS.SHAPE};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const LogoutButton = styled(BorderlessButton)`

`;

export const Icon = styled(Entypo)`
    color: ${({ theme }) => theme.COLORS.SHAPE};
    font-size: ${RFValue(34)}px;
    padding: 8px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.SHAPE};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    text-align: center;
`;

export const Represented = styled.View`
    width: 100%;
    margin-top: 40px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Company = styled(RectButton)`
    width: 48%;
    height: 144px;   
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-radius: 6px;
    margin-right: 4%;
    align-items: center; 
    justify-content: center;
`;

export const CompanyLogo = styled.Image`
    width: 100px;
    height: 22px;  
`;
