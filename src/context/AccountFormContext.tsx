
import { createContext, ReactNode, useState } from "react";

export type AccountProps = {
    name?: string
    email?: string
    phone?: string
    birth?: string
    password?: string
    passwordConfirmation?: string
}

type IAccountProvider = {
    children: ReactNode
}

interface IAccountFormData {
    accountFormData: AccountProps
    updateFormData: (data: AccountProps) => void
}

const AccountFormContext = createContext<IAccountFormData>({} as IAccountFormData)






function AccountFormProvider({ children }: IAccountProvider) {
    const [accountFormData, setAccountFormData] = useState<AccountProps>({} as AccountProps)

    function updateFormData(data: AccountProps) {
        setAccountFormData((prev) => ({ ...prev, data }))
    }

    return (
        <AccountFormContext.Provider value={{
            accountFormData,
            updateFormData
        }}>
            {children}
        </AccountFormContext.Provider>
    )
}


export {
    AccountFormProvider, AccountFormContext
}