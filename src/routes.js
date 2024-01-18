import App from "./App";
import Home from "./components/Home"
import Library from './components/Library';
import SubmissionForm from './components/SubmissionForm';
import ErrorPage from './components/ErrorPage';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/library",
                element: <Library />
            },
            {
                path: "/submission_form",
                element: <SubmissionForm />    
            }
            // {
            //     path: "/beast",
            //     element: <BeastProfile />
            // }
        ]
    }
]

export default routes;