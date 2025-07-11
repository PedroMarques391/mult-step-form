import { Text, TextInput, TextInputProps, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";
import { Controller, FieldErrors, FieldValues, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";
import clsx from "clsx";


interface IInputProps {
    icon: keyof typeof Feather.glyphMap
    formProps: UseControllerProps
    inputProps: TextInputProps
    error: string

}

const Input = forwardRef<TextInput, IInputProps>(({ icon, formProps, inputProps, error = '' }, ref) => {
    return (
        <Controller
            render={({ field }) => (
                <View style={styles.container}>
                    <View style={styles.group}>
                        <View style={styles.icon}>
                            <Feather name={icon}
                                color={
                                    clsx({
                                        ['#dc1637']: error.length > 0,
                                        ['#90D5FF']: (error.length === 0 && field.value),
                                        ['#999']: (!field.value && error.length === 0)
                                    })
                                }
                                size={24} />
                        </View>

                        <TextInput
                            ref={ref}
                            {...inputProps}
                            value={field.value}
                            onChangeText={field.onChange}
                            style={styles.control} />
                    </View>
                    {error.length > 0 && <Text style={styles.error}>{error}</Text>}
                </View>

            )}
            {...formProps}

        />
    );
})

export {
    Input
}