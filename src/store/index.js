import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import authReducer from './reducers/taskReducer';
import employeeReducer from './reducers/globalReducer';
import taskReducer from './reducers/taskReducer';
import chatReducer from './reducers/globalReducer';
import globalReducer from './reducers/globalReducer';

const store = configureStore({
   reducer: {
        auth: authReducer,
        employees: employeeReducer,
        tasks: taskReducer,
        chat: chatReducer,
        global:globalReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

setupListeners(store.dispatch);

export default store;