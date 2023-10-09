import { useState } from "react";

import InputComponent from "../elementsComponent/InputComponent";
import ButtonComponent from "../elementsComponent/ButtonComponent";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";

const Exercise1 = () => {
  const [title, setTitle] = useState("title");
  const [isHidden, setIsHidden] = useState(true);

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ width: "250px" }}>
      <Typography variant="h2">E1:</Typography>
      {!isHidden && (
        <Typography component="h1" variant="h2">
          {title}
        </Typography>
      )}
      <Stack spacing={2} direction="row">
        <InputComponent
          colBeck={setTitle}
          label="set the title"
          variant="outlined"
        />
        <ButtonComponent
          colBeck={setIsHidden}
          label="change"
          variant="contained"
        />
      </Stack>
      <br />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Typography variant="h5">Checkbox example</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <br />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Exercise1;
