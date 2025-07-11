import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native"
import { styles } from "../../styles/globals"
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AccountProps } from "../../context/AccountFormContext";
import { useAccount } from "../../hooks/useAccount";


export function FormStepOne() {
    const { control, handleSubmit, formState: { errors } } = useForm<AccountProps>()
    const { updateFormData } = useAccount()

    const { navigate } = useNavigation()
    const emailRef = useRef<TextInput>(null)

    function handleNextStep(data: AccountProps) {
        updateFormData(data)
        navigate('stepTwo')
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>
            <Input
                icon="user"
                formProps={{
                    name: 'name',
                    control,
                    rules: {
                        required: 'Nome é obrigatório'
                    }

                }}
                inputProps={{
                    placeholder: 'Nome',
                    onSubmitEditing: () => emailRef.current?.focus(),
                    returnKeyType: "next"
                }}
                error={errors.name?.message!}
            />

            <Input
                ref={emailRef}
                icon="mail"
                formProps={{
                    name: 'email',
                    control,
                    rules: {
                        required: 'Email é obrigatório',
                        pattern: {
                            value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i,
                            message: 'Email inválido'
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Email',
                    onSubmitEditing: handleSubmit(handleNextStep),

                }}
                error={errors.email?.message!}
            />

            <Button onPress={handleSubmit(handleNextStep)}>Próximo</Button>

        </KeyboardAvoidingView>
    );
}
