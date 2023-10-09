import { Button } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  colBeck: Dispatch<SetStateAction<boolean>>;
  label: string;
  variant: "outlined" | "contained" | "text";
};
const ButtonComponent: FC<Props> = ({ colBeck, variant, label }) => {
  return (
    <Button
      variant={variant}
      onClick={() => {
        colBeck(false);
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
