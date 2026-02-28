import { cloneElement, type ReactElement } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface FormItemProps {
  name: string;
  children: ReactElement<any>;
}

export const FormItem = ({ name, children }: FormItemProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        return (
          <>
            {cloneElement(children, {
              ...children.props,
              ...field,
              onChange: (e: any) => {
                children.props.onChange && children.props.onChange(e);
                field.onChange(e);
              },
              onBlur: (e: any) => {
                children.props.onBlur && children.props.onBlur(e);
                field.onBlur();
              },
            })}
            <ErrorMessage name={name} errors={errors} />
          </>
        );
      }}
    />
  );
};
