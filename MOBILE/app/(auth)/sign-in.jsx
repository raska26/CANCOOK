import { View, Text } from 'react-native'
import React from 'react'

const SignInScreen = () => {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


    return (
    <View>
      <Text>sign-in</Text>
    </View>
  )
}