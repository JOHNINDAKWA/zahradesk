import DashboardTop from "../../components/DashboardComponents/DashboardTop/DashboardTop";
import OngoingTickets from "../../components/DashboardComponents/OngoingTickets/OngoingTickets";
import StaffChart from "../../components/DashboardComponents/StaffChart/StaffChart";
import TicketChart from "../../components/DashboardComponents/TicketChart/TicketChart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardTop />

      <div className="dashboard-bottom-row">
        <div className="left-panel">
          <TicketChart />
          <StaffChart />
        </div>
        <div className="right-panel">
          <OngoingTickets />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
