import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Crear cuenta",
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <div className="card border border-base-300/70 bg-base-100 shadow-xl">
        <RegisterForm />
      </div>
      <p className="mt-4 text-center text-xs opacity-50">
        Prototipo: al registrarte serás redirigido al panel de demostración.
      </p>
    </div>
  );
}
