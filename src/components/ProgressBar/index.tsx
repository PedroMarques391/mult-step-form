import { View } from "react-native"
import { styles } from "./styles"

interface IProgressBar {
    progress: number
}
export function ProgressBar({ progress }: IProgressBar) {
    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${progress}%` }]} />
        </View>
    )
}