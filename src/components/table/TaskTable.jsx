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

const tasks = [
  { id: "1", title: "Task 1", description: "Description of task 1", employee: "Employee 1",status:"Created"},
  { id: "2", title: "Task 2", description: "Description of task 2", employee: "Employee 2",status:"Created"},
  { id: "3", title: "Task 3", description: "Description of task 3", employee: "Employee 3",status:"Created"},
  { id: "4", title: "Task 4", description: "Description of task 4", employee: "Employee 4",status:"Created"},
  { id: "5", title: "Task 5", description: "Description of task 5", employee: "Employee 5",status:"Created"},
  { id: "6", title: "Task 6", description: "Description of task 6", employee: "Employee 6",status:"Created"},
  { id: "7", title: "Task 7", description: "Description of task 7", employee: "Employee 7",status:"Created"},
  { id: "8", title: "Task 8", description: "Description of task 8", employee: "Employee 8",status:"Created"},
  { id: "9", title: "Task 9", description: "Description of task 9", employee: "Employee 9",status:"Created"},
  { id: "10", title: "Task 10", description: "Description of task 10", employee: "Employee 10",status:"Created"},
  { id: "11", title: "Task 11", description: "Description of task 11", employee: "Employee 11",status:"Created"},
];

const TaskTable = () => {
  return (
    <>
      <BreakCumb dataProp="Tasks" />
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
              <Button>Create New Task</Button>
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
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Description</TableCell>
                    <TableCell align="center">Employee</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasks.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{task.title}</TableCell>
                      <TableCell align="center">{task.description}</TableCell>
                      <TableCell align="center">{task.employee}</TableCell>
                      <TableCell align="center">{task.status}</TableCell>
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

export default TaskTable;
