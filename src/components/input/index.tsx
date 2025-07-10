import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";


interface IInputProps {
    icon: keyof typeof Feather.glyphMap
    formProps: UseControllerProps
    inputProps: TextInputProps

}

const Input = forwardRef<TextInput, IInputProps>(({ icon, formProps, inputProps }, ref) => {
    return (
        <Controller
            render={({ field }) => (
                <View style={styles.group}>
                    <View style={styles.icon}>
                        <Feather name={icon} size={24} color="red" />
                    </View>

                    <TextInput
                        ref={ref}
                        {...inputProps}
                        value={field.value}
                        onChangeText={field.onChange}
                        style={styles.control} />
                </View>

            )}
            {...formProps}
        />
    );
})

export {
    Input
}