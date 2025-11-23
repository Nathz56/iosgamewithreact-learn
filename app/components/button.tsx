import React from 'react'
import {
    GestureResponderEvent,
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
} from 'react-native'

type ButtonProps = {
	title?: string
	onPress?: (e: GestureResponderEvent) => void
	children?: React.ReactNode
	style?: ViewStyle | ViewStyle[]
	textStyle?: TextStyle | TextStyle[]
	disabled?: boolean
	rounded?: boolean
	variant?: 'default' | 'primary' | 'secondary'
	accessibilityLabel?: string
}

const Button: React.FC<ButtonProps> = ({
	title,
	children,
	onPress,
	style,
	textStyle,
	disabled = false,
	rounded = true,
	variant = 'default',
	accessibilityLabel,
}) => {
	const backgroundColor =
		variant === 'primary' ? '#0A84FF' : variant === 'secondary' ? '#EFEFF4' : '#F2F2F7'
	const color = variant === 'primary' ? '#FFFFFF' : '#000000'

	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			accessibilityLabel={accessibilityLabel ?? title}
			style={({ pressed }) => [
				styles.button,
				rounded && styles.rounded,
				{ backgroundColor, opacity: pressed ? 0.3 : 1 },
				disabled && styles.disabled,
				style,
			]}
		>
			{children ? (
				children
			) : (
				<Text style={[styles.text, { color }, textStyle]}>{title}</Text>
			)}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 16,
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 64,
	},
	rounded: {
		borderRadius: 12,
	},
	text: {
		fontSize: 20,
		fontWeight: '600',
	},
	disabled: {
		opacity: 0.6,
	},
})

export default Button

