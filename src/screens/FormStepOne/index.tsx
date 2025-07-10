import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";

export function FormStepOne() {
    const { control, handleSubmit } = useForm()
    const emailRef = useRef<TextInput>(null)

    function handleNextStep(data: any) {
        console.log(data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>
            <Input
                icon="user"
                formProps={{
                    name: 'name',
                    control
                }}
                inputProps={{
                    placeholder: 'Nome',
                    onSubmitEditing: () => emailRef.current?.focus(),
                    returnKeyType: "next"
                }}
            />

            <Input
                ref={emailRef}
                icon="mail"
                formProps={{
                    name: 'email',
                    control
                }}
                inputProps={{
                    placeholder: 'Email',
                    onSubmitEditing: handleSubmit(handleNextStep),

                }}
            />

            <Button>Próximo</Button>

        </View>
    );
}
