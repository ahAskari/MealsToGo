import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator } from "react-native-paper";
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
import { Colors } from "react-native/Libraries/NewAppScreen";

export const RegisterScreen = ({ navigation }) => {
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [email, setEmail] = useState("");

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
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        <Spacer size="large" position="bottom">
          <AuthInput
            label="Repeat Password"
            textContentType="password"
            type="outlined"
            secureTextEntry
            autoCapitalize="none"
            value={repeatedPassword}
            onChangeText={(text) => setRepeatedPassword(text)}
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
              onRegister(email, password, repeatedPassword);
            }}
          >
            Register
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
