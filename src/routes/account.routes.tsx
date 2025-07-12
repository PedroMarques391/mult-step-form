import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FormStepOne } from '../screens/FormStepOne'
import { FormStepTwo } from '../screens/FormStepTwo'
import { FormStepThree } from '../screens/FormStepThree'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AccountRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='stepOne' component={FormStepOne} />
            <Screen name='stepTwo' component={FormStepTwo} />
            <Screen name='stepThree' component={FormStepThree} />
            <Screen name='home' component={Home} />
        </Navigator>
    )
}