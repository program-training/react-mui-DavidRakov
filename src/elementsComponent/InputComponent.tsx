import { TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  colBeck: Dispatch<SetStateAction<string>>;
  label: string;
  variant: "outlined" | "filled" | "standard";
};
const InputComponent: FC<Props> = ({ colBeck, label, variant }) => {
  return (
    <TextField
      label={label}
      variant={variant}
      onChange={(e) => colBeck(e.target.value)}
    ></TextField>
  );
};

export default InputComponent;
