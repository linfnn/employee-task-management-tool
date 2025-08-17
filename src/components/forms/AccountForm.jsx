import BreakCumb from "../breakcumb";
import { useLayoutEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const testData = {
  username: "nga",
  password: "12345",
  phone: "0776981698",
  email: "nga@gmail.com",
  address: "",
  role: "owner",
};
const AccountForm = () => {
  // responsive
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setInnerWidth(window.innerWidth)
      );
  }, [innerWidth]);

  const [disableUpdate, setDisableUpdate] = useState(true);

  //   show password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  //   update account
  const [account, setAccount] = useState(testData);
  const onChangeValue = (value, flag) => {
    setAccount((prev) => ({
      ...prev,
      [flag]: value,
    }));

    setDisableUpdate(false);
  };
  const onSubmitUpdateAccount = () => {
    console.log(account);
    setDisableUpdate(true);
  };
  return (
    <Container style={{ height: "100vh" }}>
      <BreakCumb dataProp="Account" />
      <Container className="col-md-12 px-0">
        <Grid item lg={12} md={12} sm={12} xs={12} style={{ width: "100%" }}>
          <Grid
            className="d-flex justify-content-evenly align-items-center"
            style={{ flexDirection: innerWidth > 655 ? "row" : "column" }}
          >
            <TextField
              label="Username"
              style={{ width: "40%" }}
              className="mt-4"
              value={account.username}
              onChange={(e) => onChangeValue(e.target.value, "username")}
            />
            <FormControl
              sx={{ m: 1, width: "40%" }}
              variant="outlined"
              className="mt-4"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={account.password}
                onChange={(e) => onChangeValue(e.target.value, "password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid
            className="d-flex justify-content-evenly align-items-center"
            style={{ flexDirection: innerWidth > 655 ? "row" : "column" }}
          >
            <TextField
              label="Phone Number"
              value={account.phone}
              onChange={(e) => onChangeValue(e.target.value, "phone")}
              style={{ width: "40%" }}
              className="mt-4"
            />
            <TextField
              label="Email"
              value={account.email}
              onChange={(e) => onChangeValue(e.target.value, "email")}
              style={{ width: "40%" }}
              className="mt-4"
            />
          </Grid>
          <Grid
            className="d-flex justify-content-evenly align-items-center"
            style={{ flexDirection: innerWidth > 655 ? "row" : "column" }}
          >
            <TextField
              label="Address"
              value={account.address}
              onChange={(e) => onChangeValue(e.target.value, "address")}
              style={{ width: "87%" }}
              className="mt-4"
            />
          </Grid>
          <Grid className="d-flex justify-content-center mt-4">
            <Button
              variant="contained"
              size="large"
              disabled={disableUpdate}
              onClick={onSubmitUpdateAccount}
            >
              Save Change
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default AccountForm;
