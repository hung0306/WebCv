import { Navigate } from "react-router-dom";
import PrivateRouter from "../Components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

import Register from "../pages/Register";
import LayoutAdmin from "../layoutAdmin";
import Search from "../pages/Search";
import JobDetail from "../pages/JobDetail";
import Company from "../pages/Company";
import CompanyDetail from "../pages/Company/CompanyDetail";
import Dashboard from "../pages/Dashboard";
import InforCompany from "../pages/InfoCompany";
import JobManage from "../pages/JobManage";
import CreateJob from "../pages/JobManage/CreateJob";
import JobDetailAdmin from "../pages/JobManage/JobDetailAdmin";
import CvManage from "../pages/CvManage";
import CvDetail from "../pages/CvManage/CvDetail";





export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                index: true,
                element: <Home />


            },



            {
                path: "login",
                element: <Login />


            },


            {
                path: "register",
                element: <Register />


            },
            {
                path: "logout",
                element: <Logout />


            },
            {
                path: "job/:id",
                element: <JobDetail />
            },
            {
                path: "*",
                element: <Navigate to="/" />
            },
            {
                path: "Search",
                element: <Search />
            },
            {
                path: "company",
                element: <Company />
            },
            {
                path: "company/:id",
                element: <CompanyDetail />
            }






        ]
    },
    {

        element: <PrivateRouter />,
        children: [
            {
                element: <LayoutAdmin />,
                children: [
                    {
                        path: "admin",
                        element: <Dashboard />
                    },
                    {
                        path: "info-company",
                        element: <InforCompany />
                    },
                    {
                        path: "job-manage",
                        element: <JobManage />
                    },
                    {
                        path: "create-job",
                        element: <CreateJob />
                    },
                    {
                        path: "detail-job/:id",
                        element: <JobDetailAdmin />
                    },
                    {
                        path: "cv-manage",
                        element: <CvManage />
                    },
                    {
                        path: "detail-cv/:id",
                        element: <CvDetail />
                    },




                ]

            }

        ]


    }


];

