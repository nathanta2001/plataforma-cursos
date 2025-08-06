import {Navigate, Route, Routes} from 'react-router-dom';       
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import AlunoDashboard from '../pages/AlunoDashboard';
import ProfessorDashboard from '../pages/ProfessorDashboard';
import {ProtectedRoute} from './ProtectedRoute';
import {RoleBasedRoute} from './RoleBasedRoute';
import MainLayout from '../components/layout/MainLayout';  


export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout> <Home /> </MainLayout>} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={
          //<ProtectedRoute>
            <MainLayout> 
              <Dashboard /> 
            </MainLayout>
          //</ProtectedRoute>
        } />

        <Route path="/professor" element={
          //<RoleBasedRoute allowedRoles={['professor']}>
            <MainLayout> 
              <ProfessorDashboard /> 
            </MainLayout>
          //</RoleBasedRoute>
        } />

        <Route path="/admin" element={
          //<RoleBasedRoute allowedRoles={['admin']}> 
            <MainLayout> 
              <AdminDashboard /> 
            </MainLayout>
          //</RoleBasedRoute>
        } />

        <Route path="/aluno" element={
          //<RoleBasedRoute allowedRoles={['aluno']}>
            <MainLayout> 
              <AlunoDashboard /> 
            </MainLayout>
          //</RoleBasedRoute>
        } />

        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
