import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../services/yup/schema";

const PhoneLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema.pick(["phone"])),
  });
  const onNavigateToVerifyPage = (data) => {
    console.log("Form data:", data);
    navigate("/verify-login", { state: { phone: data.phone } });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} md={8} lg={6}>
        <form onSubmit={handleSubmit(onNavigateToVerifyPage)}>
          <Box className="login-box text-center">
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton size="small">
                <ArrowBackIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2" sx={{ ml: 1 }}>
                Back
              </Typography>
            </Box>

            <Typography variant="h4" gutterBottom>
              Sign In
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please enter your phone to sign in
            </Typography>
            <TextField
              label="Your phone number"
              style={{ width: "98%", margin: "5px 0" }}
              {...register("phone")}
              error={!!errors.phone} // true nếu có lỗi
              helperText={errors.phone?.message} //
              fullWidth
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mb: 2 }}
              onClick={onNavigateToVerifyPage}
            >
              {loading ? <CircularProgress size={24} /> : "Next"}
            </Button>
            <Typography variant="body2">
              Passwordless authentication methods.
            </Typography>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default PhoneLogin;
