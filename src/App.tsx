import { AppRoutes } from "./Routes";
import { AuthProvider } from "./shared/context/AuthContext";

// TodoAPI.getAll().then(data => console.log('1', data))
// TodoAPI.create({label: "Fazer almoco", complete: false})
// TodoAPI.create({label: "Fazer lanche", complete: false})
// TodoAPI.getAll().then(data => console.log('2', data))
// TodoAPI.updateById('1', {label: "Fazer janta", complete: false})
// TodoAPI.getAll().then(data => console.log('3', data))
// TodoAPI.deleteteById('1')
// TodoAPI.getAll().then(data => console.log('4', data))

export const App = () => {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};
