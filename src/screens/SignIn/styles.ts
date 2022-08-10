import styled, {css} from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";


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

export const Login = styled.Text`
    font-size: 32px;
    margin-bottom: 14px;
    align-self: flex-start;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT}
        color: ${theme.COLORS.SHAPE}
    `}
`;

export const Brand = styled.View`
  height: 150px;
  margin-top: 25%;
  margin-bottom: 32px;
`;


export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT}
    color: ${theme.COLORS.SHAPE}
  `}
`;

export const ConectarLabel = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT}
    color: ${theme.COLORS.SHAPE}
  `}
`;