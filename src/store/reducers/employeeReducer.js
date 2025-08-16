import { createSlice } from "@reduxjs/toolkit";

const initialEmployeeState = {
    employees: [],
    loading: false,
    error: null
};

const employeeSlice = createSlice({
    name: "employees",
    initialState: initialEmployeeState,
    reducers: {
        fetchEmployeesRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchEmployeesSuccess: (state, action) => {
            state.loading = false;
            state.employees = action.payload;
        },
        fetchEmployeesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        updateEmployee: (state, action) => {
            const index = state.employees.findIndex(emp => emp.id === action.payload.id);
            if (index !== -1) {
                state.employees[index] = action.payload;
            }
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(emp => emp.id !== action.payload);
        }
    }
});

export const {
    fetchEmployeesRequest,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    addEmployee,
    updateEmployee,
    deleteEmployee
} = employeeSlice.actions;

export default employeeSlice.reducer;
