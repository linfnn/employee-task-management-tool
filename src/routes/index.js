import * as pages from '../pages'
const routes = [
     {
        path: '/employee-login',
        element: <pages.EmployeeLoginPage />
    },
    {
        path: '/login',
        element: <pages.OwnerLoginPage />
    },
    {
        path: '/verify-login',
        element: <pages.VerifyCodePage />
    },
    {
        path: '/',
        element: <pages.DashboardPage />
    },
    {
        path: '/task-management',
        element: <pages.TaskManagementPage />
    },
    {
        path: '/chat',
        element: <pages.ChatPage />
    },
    {
        path: '/account',
        element: <pages.AccountPage />
    },
]

export default routes