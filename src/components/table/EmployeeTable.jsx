import BreakCumb from "../breakcumb";
import {
  Button,
  TableContainer,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const employees = [
  { id: "1", name: "Employee 1", email: "123@gmail.com", status: "Active" },
  { id: "2", name: "Employee 2", email: "123@gmail.com", status: "Active" },
  { id: "3", name: "Employee 3", email: "123@gmail.com", status: "Active" },
  { id: "4", name: "Employee 4", email: "123@gmail.com", status: "Active" },
  { id: "5", name: "Employee 5", email: "123@gmail.com", status: "Active" },
  { id: "6", name: "Employee 6", email: "123@gmail.com", status: "Active" },
  { id: "7", name: "Employee 7", email: "123@gmail.com", status: "Active" },
  { id: "8", name: "Employee 8", email: "123@gmail.com", status: "Active" },
  { id: "9", name: "Employee 9", email: "123@gmail.com", status: "Active" },
  { id: "10", name: "Employee 10", email: "123@gmail.com", status: "Active" },
  { id: "11", name: "Employee 11", email: "123@gmail.com", status: "Active" },
  { id: "12", name: "Employee 12", email: "123@gmail.com", status: "Active" },
];

const EmployeeTable = () => {
  return (
    <>
      <BreakCumb dataProp="Employees" />
      <Container className="col-md-12 px-0">
        <Grid container mt={5}>
          <Grid item lg={12} md={12} sm={12} xs={12} style={{ width: "100%" }}>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="d-flex flex-wrap justify-content-between mb-4"
            >
              {/* <ButtonCreate dataProp='Employees' />  */}
              <Button>Create employees</Button>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Filter"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                variant="outlined"
              />
            </Grid>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Employee Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((emp, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{emp.name}</TableCell>
                      <TableCell align="center">{emp.email}</TableCell>
                      <TableCell align="center">{emp.status}</TableCell>
                      <TableCell align="center">
                        {/* <ButtonRestore idProp={emp.id} />
                        <ButtonDelete idProp={emp.id} /> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
           
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EmployeeTable;
