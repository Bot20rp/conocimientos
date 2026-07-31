import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Iniciar sesión",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="card border border-base-300/70 bg-base-100 shadow-xl">
        <LoginForm />
      </div>
      <p className="mt-4 text-center text-xs opacity-50">
        Prototipo: al ingresar serás redirigido al panel de demostración.
      </p>
    </div>
  );
}
