import { FieldError } from '@/components/ui/field';

type AuthFieldErrorProps = {
  id: string;
  children: string;
  animationKey: number;
};

export function AuthFieldError({ id, children, animationKey }: AuthFieldErrorProps) {
  return (
    <FieldError
      key={animationKey}
      id={id}
      className="auth-field-error-shake text-xs text-red-600"
    >
      {children}
    </FieldError>
  );
}
