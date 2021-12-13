import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, TextInput, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountCover,
  AuthButton,
  AuthInput,
  AccountContainer,
  ErrorContainer,
  Title,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  return (
    <AccountBackground>
      <AccountCover />
      <Title> Meals To Go </Title>
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <AuthInput
            label="E-mail"
            type="outlined"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </Spacer>
        <Spacer size="large" position="bottom">
          <AuthInput
            label="Password"
            textContentType="password"
            type="outlined"
            secureTextEntry={showPassword}
            autoCapitalize="none"
            right={
              <TextInput.Icon
                name="eye"
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <AuthButton
            mode="contained"
            icon="lock-open-outline"
            onPress={() => {
              onLogin(email, password);
            }}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
