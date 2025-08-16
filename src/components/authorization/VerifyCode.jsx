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
import { useNavigate, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../services/yup/schema";

const VerifyCode = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema.pick(["accessCode"])),
    defaultValues: { phone },
  });
  const onLogin = (data) => {
    console.log("Form data:", { phone, accessCode: data.accessCode });
    navigate('/')
  };
  const onResendCode=()=>{
    console.log("resend codeÏ")
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} md={8} lg={6}>
        <form onSubmit={handleSubmit(onLogin)}>
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
              label="Verify Code"
              style={{ width: "98%", margin: "5px 0" }}
              {...register("accessCode")}
              error={!!errors.accessCode}
              helperText={errors.accessCode?.message}
              fullWidth
              variant="outlined"
            />
            <div style={{ display: "flex", gap: "8px", marginTop: 8 }}>
              <Button

                variant="contained"
                fullWidth
                style={{ background: "#bcbbbb" }}
                sx={{ mb: 2 }}
                onClick={onResendCode}
              >
                Resend
              </Button>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mb: 2 }}
                onClick={onLogin}
              >
                {loading ? <CircularProgress size={24} /> : "Login"}
              </Button>
            </div>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default VerifyCode;
