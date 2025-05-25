import React, { useState } from 'react';
import './SlaTicketTable.css';

const sampleTickets = [
  { id: 'TCK-1001', subject: 'Cannot access VPN', requester: 'Alice Wanjiku', priority: 'High', status: 'Open', timeLeft: '2h 15m', slaStatus: 'On Track' },
  { id: 'TCK-1002', subject: 'Slow system performance', requester: 'Brian Otieno', priority: 'Medium', status: 'In Progress', timeLeft: '1h 20m', slaStatus: 'At Risk' },
  { id: 'TCK-1003', subject: 'Missing emails', requester: 'Carol Njeri', priority: 'Low', status: 'Open', timeLeft: '-1h 45m', slaStatus: 'Breached' },
  { id: 'TCK-1004', subject: 'Printer not working', requester: 'David Kimani', priority: 'Low', status: 'Closed', timeLeft: '3h 10m', slaStatus: 'On Track' },
  { id: 'TCK-1005', subject: 'Software install', requester: 'Emily Njoroge', priority: 'Medium', status: 'Resolved', timeLeft: '5h 30m', slaStatus: 'On Track' },
  { id: 'TCK-1006', subject: 'WiFi disconnects', requester: 'Francis Mumo', priority: 'High', status: 'Open', timeLeft: '-15m', slaStatus: 'Breached' },
  { id: 'TCK-1007', subject: 'Blue screen error', requester: 'Grace Atieno', priority: 'High', status: 'In Progress', timeLeft: '1h 5m', slaStatus: 'At Risk' },
  { id: 'TCK-1008', subject: 'Outlook sync issue', requester: 'Henry Kiptoo', priority: 'Medium', status: 'Open', timeLeft: '4h 50m', slaStatus: 'On Track' },
  { id: 'TCK-1009', subject: 'USB port failure', requester: 'Irene Auma', priority: 'Low', status: 'Resolved', timeLeft: '0h 30m', slaStatus: 'At Risk' },
  { id: 'TCK-1010', subject: 'Computer won’t boot', requester: 'James Mwangi', priority: 'High', status: 'Open', timeLeft: '-2h 00m', slaStatus: 'Breached' },
    { id: 'TCK-1011', subject: 'Cannot access VPN', requester: 'Amos Wanjiku', priority: 'High', status: 'Open', timeLeft: '2h 15m', slaStatus: 'On Track' },
  { id: 'TCK-1012', subject: 'Slow system performance', requester: 'Brandon Otieno', priority: 'Medium', status: 'In Progress', timeLeft: '1h 20m', slaStatus: 'At Risk' },
  { id: 'TCK-1013', subject: 'Missing emails', requester: 'Hanifa Njeri', priority: 'Low', status: 'Open', timeLeft: '-1h 45m', slaStatus: 'Breached' },
  { id: 'TCK-1014', subject: 'Printer not working', requester: 'Daniel Kimani', priority: 'Low', status: 'Closed', timeLeft: '3h 10m', slaStatus: 'On Track' },
  { id: 'TCK-1015', subject: 'Software install', requester: 'Emise Njoroge', priority: 'Medium', status: 'Resolved', timeLeft: '5h 30m', slaStatus: 'On Track' },
  { id: 'TCK-1016', subject: 'WiFi disconnects', requester: 'Frank Mumo', priority: 'High', status: 'Open', timeLeft: '-15m', slaStatus: 'Breached' },
  { id: 'TCK-1017', subject: 'Blue screen error', requester: 'Vanessa Atieno', priority: 'High', status: 'In Progress', timeLeft: '1h 5m', slaStatus: 'At Risk' },
  { id: 'TCK-1018', subject: 'Outlook sync issue', requester: 'Harry Kiptoo', priority: 'Medium', status: 'Open', timeLeft: '4h 50m', slaStatus: 'On Track' },
  { id: 'TCK-1019', subject: 'USB port failure', requester: 'Calvin Auma', priority: 'Low', status: 'Resolved', timeLeft: '0h 30m', slaStatus: 'At Risk' },
  { id: 'TCK-1020', subject: 'Computer won’t boot', requester: 'Fred Mwangi', priority: 'High', status: 'Open', timeLeft: '-2h 00m', slaStatus: 'Breached' },
];

const getBadgeClass = (status) => `sla-status-badge ${status.toLowerCase().replace(/\s/g, '-')}`;

const SlaTicketTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentTickets = sampleTickets.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sampleTickets.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="sla-table">
      <div className="sla-table__header">
        <h4>Tickets Nearing SLA</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Requester</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Time Left</th>
            <th>SLA Status</th>
          </tr>
        </thead>
        <tbody>
          {currentTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.requester}</td>
              <td>
                <span className={`priority ${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
              </td>
              <td>{ticket.status}</td>
              <td>{ticket.timeLeft}</td>
              <td>
                <span className={getBadgeClass(ticket.slaStatus)}>{ticket.slaStatus}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlaTicketTable;
