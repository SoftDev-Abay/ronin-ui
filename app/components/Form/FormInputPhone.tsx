import React, { ReactNode } from "react";
import { TextField } from "@mui/material";
import InputMask, { Props as InputMaskProps } from "react-input-mask";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";

type FormInputProps = {
  name: string;
  control: any;
  label: string;
};

// Define the corrected InputMask component
type TInputMaskCorrect = Omit<InputMaskProps, "children"> & {
  children?: (inputProps: any) => JSX.Element;
};
const InputMaskCorrect: React.FC<TInputMaskCorrect> = ({
  children,
  ...props
}) => {
  const child = children as ReactNode;
  return <InputMask {...props}>{child}</InputMask>;
};

const FormInputPhone = ({ name, control, label }: FormInputProps) => {
  const t = useTranslations();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <InputMaskCorrect
          mask="+7 (999) 999-99-99"
          value={value}
          onChange={onChange}
        >
          {() => (
            <TextField
              id="outlined-basic"
              label={label}
              variant="standard"
              InputLabelProps={{ shrink: true }}
              placeholder="+7 (___) ___-__-__"
              helperText={
                error
                  ? t(`pages.contact_us.contact_form.errors.${error.message}`)
                  : null
              }
              error={!!error}
            />
          )}
        </InputMaskCorrect>
      )}
    />
  );
};

export default FormInputPhone;
