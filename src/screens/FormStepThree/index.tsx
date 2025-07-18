import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native"
import { styles } from "../../styles/globals"

import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";
import { AccountProps } from "../../context/AccountFormContext";
import { useAccount } from "../../hooks/useAccount";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "../../components/ProgressBar";

export function FormStepThree() {
    const { control, handleSubmit, formState: { errors }, getValues } = useForm<AccountProps>()
    const { updateFormData } = useAccount()
    const { navigate } = useNavigation();

    const passwordRef = useRef<TextInput>(null)

    function handleNextStep(data: AccountProps) {
        updateFormData(data)
        navigate('home')
    }

    function validationPassword(passwordConfirmation: string) {
        const { password } = getValues()
        return password === passwordConfirmation || 'As senhas devem ser iguais.'
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Text style={styles.title}>Escolha sua Senha</Text>
            <ProgressBar progress={100} />

            <Input
                icon="lock"
                formProps={{
                    name: 'password',
                    control,
                    rules: {
                        required: 'Senha é obrigatória',
                        minLength: {
                            value: 6,
                            message: 'A senha deve ter pelo menos 6 digitos.'
                        }
                    }

                }}
                inputProps={{
                    placeholder: 'Senha',
                    onSubmitEditing: () => passwordRef.current?.focus(),
                    returnKeyType: "next",
                    secureTextEntry: true
                }}
                error={errors.password?.message!}
            />

            <Input
                ref={passwordRef}
                icon="key"
                formProps={{
                    name: 'passwordConfirmation',
                    control,
                    rules: {
                        required: 'Confirme sua Senha',
                        validate: validationPassword

                    }
                }}
                inputProps={{
                    placeholder: 'Confirme sua senha',
                    onSubmitEditing: handleSubmit(handleNextStep),
                    secureTextEntry: true

                }}
                error={errors.passwordConfirmation?.message!}
            />

            <Button onPress={handleSubmit(handleNextStep)}>Finalizar</Button>

        </KeyboardAvoidingView>
    );
}
