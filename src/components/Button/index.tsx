import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";
import clsx from "clsx";

interface IButtonProps extends TouchableOpacityProps {
    children?: ReactNode;
    variant?: 'multiple-arrows' | 'text-with-arrow';
}

export function Button({ children, variant = 'text-with-arrow', ...rest }: IButtonProps) {
    const isMultipleArrows = variant === 'multiple-arrows';

    return (
        <TouchableOpacity
            {...rest}
            style={[
                styles.base,
                isMultipleArrows ? styles.arrowOnly : styles.fullWidth
            ]}
        >
            {isMultipleArrows ? (
                <View style={styles.arrowGroup}>
                    <Feather name="chevron-right" size={23} color="#fff" />
                    <Feather name="chevron-right" size={23} color="#fff" />
                    <Feather name="chevron-right" size={23} color="#fff" />
                </View>
            ) : (
                <View style={styles.textWithArrow}>
                    <Text style={styles.text}>{children}</Text>
                    <Feather name="chevron-right" size={20} color="#fff" />
                </View>
            )}
        </TouchableOpacity>
    );
}
