import { NavigationContainer } from "@react-navigation/native";
import { AccountRoutes } from "./account.routes";

export function Route() {
    return (
        <NavigationContainer>
            <AccountRoutes />
        </NavigationContainer>
    )
}