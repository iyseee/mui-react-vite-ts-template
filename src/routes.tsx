import { Navigate, Route, Routes } from 'react-router-dom';
import { ReactElement } from 'react';
import Dashboard from './Dashboard';
import { Test } from './pages/test';
import { Test2 } from './pages/test2';


export const Router = (): ReactElement => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="" element={<Navigate to="test" replace />} />
                {/* <Route path="app" element={<DashboardApp />} />
                <Route path="user" element={<User />} />
                <Route path="products" element={<Products />} />
                <Route path="blog" element={<Blog />} /> */}
                <Route path="test" element={<Test />} />
                <Route path="test2" element={<Test2 />} />
                
            </Route>
            {/* <Route path="/" element={<LogoOnlyLayout />}>
  
                <Route path="" element={<Navigate to="/dashboard" />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Route>*/}
        </Routes> 
    );
};

export default Router;
