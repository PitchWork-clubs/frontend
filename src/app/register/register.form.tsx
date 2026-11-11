"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordRequirements, passwordMeetsRequirements } from "@/components/auth/password-requirements";
import { AuthFieldError } from "@/components/auth/auth-field-error.component";

type RegisterField = "firstName" | "lastName" | "email" | "password" | "confirmPassword" | "dob";
type RegisterErrors = Partial<Record<RegisterField, string>>;

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [hasFailedPasswordValidation, setHasFailedPasswordValidation] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [shakeAttempt, setShakeAttempt] = useState(0);

  const clearError = (field: RegisterField) => {
    setSubmitError("");
    setErrors((currentErrors) => {
      if (!currentErrors[field]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const dateOfBirth = String(formData.get("dob") ?? "");
    const nextErrors: RegisterErrors = {};

    if (!firstName) nextErrors.firstName = "Enter your first name.";
    if (!lastName) nextErrors.lastName = "Enter your last name.";
    if (!email) {
      nextErrors.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!passwordMeetsRequirements(password)) {
      nextErrors.password = "Choose a password that meets the requirements below.";
    }
    if (!confirmPassword) {
      nextErrors.confirmPassword = "Confirm your password.";
    } else if (password !== confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }
    if (!dateOfBirth) {
      nextErrors.dob = "Enter your date of birth.";
    } else {
      const today = new Date();
      const localToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      if (dateOfBirth > localToday) nextErrors.dob = "Date of birth cannot be in the future.";
    }

    setHasFailedPasswordValidation(Boolean(nextErrors.password));
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitError("Please fix the highlighted fields before creating your account.");
      setShakeAttempt((attempt) => attempt + 1);
      return;
    }
    setSubmitError("");
    // Submission handler with form values
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="auth-form space-y-2 text-[0.7rem] sm:space-y-2.5 sm:text-xs [&_[data-slot=field-label]]:text-xs">
      <FieldGroup className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Field data-invalid={Boolean(errors.firstName)}>
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <Input
            id="first-name"
            name="firstName"
            placeholder="John"
            onChange={() => clearError("firstName")}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "register-first-name-error" : undefined}
            required
          />
          {errors.firstName && <AuthFieldError id="register-first-name-error" animationKey={shakeAttempt}>{errors.firstName}</AuthFieldError>}
        </Field>
        <Field data-invalid={Boolean(errors.lastName)}>
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <Input
            id="last-name"
            name="lastName"
            placeholder="Doe"
            onChange={() => clearError("lastName")}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "register-last-name-error" : undefined}
            required
          />
          {errors.lastName && <AuthFieldError id="register-last-name-error" animationKey={shakeAttempt}>{errors.lastName}</AuthFieldError>}
        </Field>
      </FieldGroup>

      <Field data-invalid={Boolean(errors.email)}>
        <FieldLabel htmlFor="email">Email Address</FieldLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          onChange={() => clearError("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "register-email-error" : undefined}
          required
        />
        {errors.email && <AuthFieldError id="register-email-error" animationKey={shakeAttempt}>{errors.email}</AuthFieldError>}
      </Field>

      <Field data-invalid={Boolean(errors.password)}>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setHasFailedPasswordValidation(false);
              clearError("password");
              clearError("confirmPassword");
            }}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "register-password-error" : undefined}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 inline-flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center cursor-pointer text-gray-400 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <PasswordRequirements
          password={password}
          isVisible={isPasswordFocused || hasFailedPasswordValidation}
        />
        {errors.password && <AuthFieldError id="register-password-error" animationKey={shakeAttempt}>{errors.password}</AuthFieldError>}
      </Field>

      <Field data-invalid={Boolean(errors.confirmPassword)}>
        <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
        <div className="relative">
          <Input
            id="confirm-password"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="********"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              clearError("confirmPassword");
            }}
            aria-invalid={Boolean(errors.confirmPassword)}
            aria-describedby={errors.confirmPassword ? "register-confirm-password-error" : undefined}
            className="pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-1/2 inline-flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center cursor-pointer text-gray-400 hover:text-gray-700"
            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.confirmPassword && <AuthFieldError id="register-confirm-password-error" animationKey={shakeAttempt}>{errors.confirmPassword}</AuthFieldError>}
      </Field>

      <FieldGroup className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Field data-invalid={Boolean(errors.dob)}>
          <FieldLabel htmlFor="dob">Date of Birth</FieldLabel>
          <div className="relative">
            <Input
              id="dob"
              name="dob"
              type="date"
              placeholder="yyyy-mm-dd"
              onChange={() => clearError("dob")}
              aria-invalid={Boolean(errors.dob)}
              aria-describedby={errors.dob ? "register-dob-error" : undefined}
              required
            />
          </div>
          {errors.dob && <AuthFieldError id="register-dob-error" animationKey={shakeAttempt}>{errors.dob}</AuthFieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="nationality">Nationality</FieldLabel>
          <select
            id="nationality"
            name="nationality"
            defaultValue=""
            className="w-full rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-[0.7rem] text-gray-800 shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 sm:text-xs"
          >
            <option value="" disabled>Select country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="ES">Spain</option>
            <option value="IT">Italy</option>
            <option value="BR">Brazil</option>
            <option value="AR">Argentina</option>
          </select>
        </Field>
      </FieldGroup>

      <Field>
        <FieldLabel>Gender</FieldLabel>
        <div className="grid grid-cols-2 gap-2 bg-gray-200/50 p-1 rounded-lg" role="group" aria-label="Select Gender">
          <button
            type="button"
            onClick={() => setGender("Male")}
            className={`py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${
              gender === "Male"
                ? "bg-emerald-800 text-white shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-pressed={gender === "Male"}
          >
            Male
          </button>
          <button
            type="button"
            onClick={() => setGender("Female")}
            className={`py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${
              gender === "Female"
                ? "bg-emerald-800 text-white shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-pressed={gender === "Female"}
          >
            Female
          </button>
        </div>
        <input type="hidden" name="gender" value={gender} />
      </Field>

      <button
        type="submit"
        className="w-full bg-emerald-800 text-white font-medium py-2 sm:py-2.5 rounded-lg hover:bg-emerald-700 transition-colors shadow-xs mt-1 cursor-pointer"
      >
        Create Account
      </button>
      {submitError && <AuthFieldError id="register-submit-error" animationKey={shakeAttempt}>{submitError}</AuthFieldError>}

      <div className="relative flex py-1 items-center">
        <div className="grow border-t border-gray-200" />
        <span className="shrink mx-4 text-gray-400 text-[10px] sm:text-xs tracking-wider uppercase">
          Or continue with
        </span>
        <div className="grow border-t border-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
            className="flex min-h-10 items-center justify-center gap-2 rounded-lg border border-gray-300 px-2 py-1.5 text-[0.7rem] font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:py-2 sm:text-xs cursor-pointer"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Google
        </button>
        <button
          type="button"
            className="flex min-h-10 items-center justify-center gap-2 rounded-lg bg-black px-2 py-1.5 text-[0.7rem] font-medium text-white transition-colors hover:bg-gray-800 sm:py-2 sm:text-xs cursor-pointer"
        >
          {/* Inline Apple brand mark; lucide-react does not include brand logos. */}
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.96 2.76 1.01.08 2.07-.51 2.69-1.26z" />
          </svg>
          Apple
        </button>
      </div>

      <p className="pt-1 text-center text-[0.7rem] text-gray-500 sm:text-xs">
        Already have an account?{" "}
        <Link href="/login" className="text-emerald-800 font-semibold hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}
