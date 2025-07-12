import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/globals"
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AccountProps } from "../../context/AccountFormContext";
import { useAccount } from "../../hooks/useAccount";
import { ProgressBar } from "../../components/ProgressBar";

export function FormStepTwo() {
    const { control, handleSubmit, formState: { errors } } = useForm<AccountProps>();
    const { updateFormData } = useAccount()
    const { navigate } = useNavigation();
    const phoneRef = useRef<TextInput>(null);
    function handleNextStep(data: AccountProps) {
        updateFormData(data)
        navigate('stepThree');
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text style={styles.title}>Seus Dados</Text>
            <ProgressBar progress={70} />

            <Input
                icon="calendar"
                formProps={{
                    name: 'birth',
                    control,
                    rules: {
                        required: 'A data é obrigatória',
                        pattern: {
                            value: /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/,
                            message: 'Data inválida. Use o formato dd/mm/aaaa'
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Data de Nascimento',
                    onSubmitEditing: () => phoneRef.current?.focus(),
                    returnKeyType: "next"
                }}
                error={errors.birth?.message!}
            />

            <Input
                ref={phoneRef}
                icon="phone"
                formProps={{
                    name: 'phone',
                    control,
                    rules: {
                        required: 'Telefone é obrigatório',
                        pattern: {
                            value: /^\(?\d{2}\)?\s?9\d{4}-\d{4}$/,
                            message: 'Telefone inválido. Ex: (11) 91234-5678'
                        }
                    }
                }}
                inputProps={{
                    placeholder: 'Telefone',
                    keyboardType: 'phone-pad',
                    onSubmitEditing: handleSubmit(handleNextStep)
                }}
                error={errors.phone?.message!}
            />

            <Button variant={"multiple-arrows"} onPress={handleSubmit(handleNextStep)}>Próximo</Button>
        </KeyboardAvoidingView>
    );
}
