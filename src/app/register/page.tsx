import RegisterForm from "./register.form";
import { ScrollArea } from "@/components/ScrollArea";
import { AuthBrandPanel } from "@/components/auth/auth.brand.panel";

export default function RegisterPage() {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-quinary p-0 sm:p-4 lg:p-8">
      <div className="relative flex min-h-0 w-full max-w-5xl flex-col overflow-hidden rounded-none bg-primary shadow-2xl sm:rounded-3xl lg:h-[90dvh] lg:max-h-[90dvh] lg:flex-row">
        <AuthBrandPanel variant="register" />

        {/* Right Form Column */}
        <ScrollArea className="auth-form-scroll-area relative z-20 flex w-full shrink-0 flex-col justify-start rounded-b-none bg-quaternary p-6 sm:rounded-b-3xl lg:min-h-0 lg:w-1/2 lg:flex-1 lg:rounded-none sm:p-8">
          <div className="mx-auto w-full max-w-md py-3 space-y-2 sm:py-5 sm:space-y-2.5 lg:py-6">
            <div>
              <h1 className="text-base font-bold text-gray-900 sm:text-lg">Create Account</h1>
              <p className="text-[0.65rem] text-gray-500 sm:text-[0.7rem]">Enter your details to get started.</p>
            </div>

            <RegisterForm />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
