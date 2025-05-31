import SlaFilters from "../../components/SlaMonitorComponents/SlaFilters/SlaFilters";
import SlaSummaryCards from "../../components/SlaMonitorComponents/SlaSummaryCards/SlaSummaryCards";
import SlaTicketTable from "../../components/SlaMonitorComponents/SlaTicketTable/SlaTicketTable";
import "./SlaMonitor.css";
import SlaStatusBadge from "./../../components/SlaMonitorComponents/SlaStatusBadge/SlaStatusBadge";
import { Link } from "react-router-dom";

import { FiExternalLink } from "react-icons/fi";

const SlaMonitor = () => {
  return (
    <div className="sla-monitor-page">
      <div className="sla-monitor__header">
        <h2>SLA Monitor</h2>
        <Link to="/sla-rules" className="sla-rules-link">
          SLA Policies <FiExternalLink />
        </Link>
      </div>

      <SlaSummaryCards />

      <div >
        <SlaStatusBadge />

      </div>

      <SlaTicketTable />
    </div>
  );
};

export default SlaMonitor;
