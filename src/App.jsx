import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Layout from './components/layout/Layout/Layout';

// Pages
import Dashboard from './pages/Dashboard/Dashboard';
import MyTickets from './pages/MyTickets/MyTickets';
import AllTickets from './pages/AllTickets/AllTickets';
import OpenTickets from './pages/OpenTickets/OpenTickets';
import RepliedTickets from './pages/RepliedTickets/RepliedTickets';
import OverdueTickets from './pages/OverdueTickets/OverdueTickets';
import ClosedTickets from './pages/ClosedTickets/ClosedTickets';
import Escalations from './pages/Escalations/Escalations';
import TicketDetails from './pages/TicketDetails/TicketDetails';
import CreateTicket from './pages/CreateTicket/CreateTicket';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import UserManagement from './pages/UserManagement/UserManagement';
import SlaMonitor from './pages/SlaMonitor/SlaMonitor';
import Notifications from './pages/Notifications/Notifications';
import KnowledgeBase from './pages/knowledge-base/knowlede-base';
import CreateArticle from './pages/CreateArticle/CreateArticle';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import CreateUser from './pages/CreateUser/CreateUser';
import SlaRules from './pages/SlarRules/SlaRules';
import NewSlaRule from './pages/NewSlaRule/NewSlaRule';
import WorkflowAdmin from './pages/WorkflowAdmin/WorkflowAdmin';
import RequestTypeConfigurator from './pages/RequestTypeConfigurator/RequestTypeConfigurator';
import MyTicketsCalendar from './pages/MyTicketsCalendar/MyTicketsCalendar';
import Organizations from './pages/Organizations/Organizations';


const AppRoutes = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return isLoginRoute ? (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  ) : (
    <Layout>
      <Routes>
        {/* Overview */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/new-ticket" element={<CreateTicket />} />

        {/* Tickets */}
        <Route path="/ticket/:id" element={<TicketDetails />} />
        <Route  path="/my-tickets/calendar"  element={<MyTicketsCalendar />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/all-tickets" element={<AllTickets />} />
        <Route path="/open-tickets" element={<OpenTickets />} />
        <Route path="/replied-tickets" element={<RepliedTickets />} />
        <Route path="/overdue-tickets" element={<OverdueTickets />} />
        <Route path="/closed-tickets" element={<ClosedTickets />} />
        <Route path="/escalations" element={<Escalations />} />
        <Route path="/sla-monitor" element={<SlaMonitor/>} />
        <Route path="/sla-rules" element={<SlaRules/>} />
        <Route path="/sla-rules/new" element={<NewSlaRule/>} />

        {/* Knowledge */}
        <Route path="/knowledge-base" element={<KnowledgeBase/>} />
        <Route path="/new-article" element={<CreateArticle/>} />
       <Route path="/article/:id" element={<ArticlePage />} />

        {/* Admin */}
        <Route path="/reports" element={<div>Reports Coming soon</div>} />
        <Route path="/workflow-admin" element={<WorkflowAdmin/>} />
        <Route path="/request-type-config" element={<RequestTypeConfigurator/>} />
        <Route path="/users" element={<UserManagement/>} />
        <Route path="/create-user" element={<CreateUser/>} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/organizations" element={<Organizations />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
