
import { AccountFormProvider } from './context/AccountFormContext';
import { Route } from './routes';
import { FormStepOne } from './screens/FormStepOne';

export default function App() {
  return (
    <AccountFormProvider>
      <Route />
    </AccountFormProvider>

  )
}