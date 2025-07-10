import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
    children: ReactNode
}

export function Button({ children, ...rest }: IButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text>
                {children}
            </Text>
        </TouchableOpacity>
    )
}