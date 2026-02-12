import type { HTMLAttributes } from 'react';
import { type FieldValues, FormProvider, type UseFormReturn } from 'react-hook-form';

interface FormProps<T extends FieldValues> extends HTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<T>;
}

export const Form = <T extends FieldValues>({
  form, children, ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form {...props}>{children}</form>
    </FormProvider>
  )
}