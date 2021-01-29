import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("Home");
			}
		})

		return unsubscribe
	}, []);

	const signIn = () => {};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar styles="light" />
			<Image
				source={require("../assets/big-eye-monster.png")}
				style={{ width: 200, height: 200 }}
			/>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Email"
					autoFocus
					type="email"
					value={email}
					onChange={(e) => setEmail(e)}
				/>
				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onChange={(e) => setPassword(e)}
				/>
			</View>
			<Button title="Login" containerStyle={styles.button} onPress={signIn} />
			<Button
				onPress={() => navigation.navigate("Register")}
				title="Register"
				containerStyle={styles.button}
				type="outline"
			/>
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",
	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop: 10,
	},
});
