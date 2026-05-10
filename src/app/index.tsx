import React from "react";
import {
	KeyboardAvoidingView,
	Platform,
	View,
	Text,
	TextInput,
	Pressable,
	Image,
	StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container}>
					{/* Logo */}
					<Image
						style={styles.logo}
						source={require("../../assets/page-logo.png")}
						resizeMode="contain"
					/>

					{/* Heading */}
					<Text style={styles.heading}>Sign In</Text>

					{/* Subtitle */}
					<Text style={styles.subHeading}>
						Let’s experience the joy of telecare AI.
					</Text>

					{/* Email */}
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Email Address</Text>

						<TextInput
							style={[styles.input, styles.activeInput]}
							placeholder="Enter Email"
							placeholderTextColor="#8A8A8A"
						/>
					</View>

					{/* Password */}
					<View style={styles.inputWrapper}>
						<Text style={styles.label}>Password</Text>

						<TextInput
							style={styles.input}
							placeholder="Enter Password"
							placeholderTextColor="#8A8A8A"
							secureTextEntry
						/>
					</View>

					{/* Button */}
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>Sign In →</Text>
					</Pressable>

					{/* Social Buttons */}
					<View style={styles.socialContainer}>
						<Pressable style={styles.socialButton}>
							<Text style={styles.socialText}>f</Text>
						</Pressable>

						<Pressable style={styles.socialButton}>
							<Text style={styles.socialText}>G</Text>
						</Pressable>

						<Pressable style={styles.socialButton}>
							<Text style={styles.socialText}>◎</Text>
						</Pressable>
					</View>

					{/* Footer */}
					<Text style={styles.footerText}>
						Don’t have an account? <Text style={styles.link}>Sign Up.</Text>
					</Text>

					<Text style={styles.forgotPassword}>Forgot your password?</Text>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default LoginScreen;

const PRIMARY = "#8ED613";

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#E5E7E4",
	},

	container: {
		flex: 1,
		backgroundColor: "#F7F7F7",
		margin: 10,
		borderRadius: 40,
		paddingHorizontal: 28,
		paddingTop: 70,
		alignItems: "center",
	},

	logo: {
		width: 55,
		height: 55,
		marginBottom: 30,
	},

	heading: {
		fontSize: 42,
		fontWeight: "800",
		color: "#2E2E2E",
	},

	subHeading: {
		marginTop: 12,
		fontSize: 15,
		color: "#7C7C7C",
		textAlign: "center",
		marginBottom: 40,
	},

	inputWrapper: {
		width: "100%",
		marginBottom: 20,
	},

	label: {
		fontSize: 15,
		fontWeight: "700",
		color: "#303030",
		marginBottom: 10,
	},

	input: {
		height: 58,
		borderWidth: 2,
		borderColor: "#B7DD69",
		backgroundColor: "#FFFFFF",
		borderRadius: 18,
		paddingHorizontal: 20,
		fontSize: 16,
		color: "#222",
	},

	activeInput: {
		borderWidth: 2,
		borderColor: "#B7DD69",
		backgroundColor: "#FFFFFF",
	},

	button: {
		width: "100%",
		height: 58,
		backgroundColor: PRIMARY,
		borderRadius: 18,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},

	buttonText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "700",
	},

	socialContainer: {
		flexDirection: "row",
		gap: 16,
		marginTop: 40,
	},

	socialButton: {
		width: 58,
		height: 58,
		borderRadius: 18,
		borderWidth: 1,
		borderColor: "#D8D8D8",
		backgroundColor: "#FFFFFF",
		justifyContent: "center",
		alignItems: "center",
	},

	socialText: {
		fontSize: 24,
		fontWeight: "700",
		color: "#333",
	},

	footerText: {
		marginTop: 40,
		fontSize: 14,
		color: "#555",
	},

	link: {
		color: PRIMARY,
		fontWeight: "700",
	},

	forgotPassword: {
		marginTop: 12,
		fontSize: 14,
		color: PRIMARY,
		textDecorationLine: "underline",
	},
});
