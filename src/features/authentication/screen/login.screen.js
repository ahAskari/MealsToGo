import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountCover,
  AuthButton,
  AuthInput,
  AccountContainer,
} from "../components/account.styles";

export const LoginScreen = () => {
  const { onLogin, error } = useContext(AuthenticationContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  return (
    <AccountBackground>
      <AccountCover />
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
            secure
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
          // <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          // </ErrorContainer>
        )}
        <AuthButton
          mode="contained"
          icon="lock-open-outline"
          onPress={() => {
            onLogin(email, password);
          }}
        >
          login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
