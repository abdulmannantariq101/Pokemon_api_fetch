import React, { useState } from "react";
import DataTable from "react-data-table-component";

// 🔵 Colored status badge component
const StatusBadge = ({ status }) => {
  let color = "#6c757d"; // default gray

  switch (status.toLowerCase()) {
    case "done":
      color = "#007bff"; // Blue
      break;
    case "pending":
      color = "#ffc107"; // Yellow
      break;
    case "missing":
      color = "#dc3545"; // Red
      break;
    default:
      color = "#6c757d";
  }

  return (
    <span
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "0.8rem",
        textTransform: "capitalize",
      }}
    >
      {status}
    </span>
  );
};

const MyDataTable = () => {
  const fullData = [
    {
      id: 1,
      name: "Hamid Alemohammad",
      status: "Done",
      frenchStatus: "Done",
    },
    {
      id: 2,
      name: "Where Are the Women in AI?",
      status: "Done",
      frenchStatus: "Pending",
    },
    {
      id: 3,
      name: "Turing & Human Potential",
      status: "Done",
      frenchStatus: "Pending",
    },
    {
      id: 4,
      name: "Signifyd AI Response",
      status: "Missing",
      frenchStatus: "—",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredData = fullData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
      width: "70px",
      center: true,
    },
    {
      name: "Title",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "English Status",
      selector: (row) => row.status,
      cell: (row) => <StatusBadge status={row.status} />,
      sortable: true,
      center: true,
    },
    {
      name: "French Status",
      selector: (row) => row.frenchStatus,
      cell: (row) =>
        row.frenchStatus === "—" ? (
          <span style={{ color: "#999" }}>—</span>
        ) : (
          <StatusBadge status={row.frenchStatus} />
        ),
      sortable: true,
      center: true,
    },
  ];

  const customStyles = {
    table: {
      style: {
        border: "1px solid #007bff",
        borderRadius: "10px",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#007bff",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        borderBottom: "1px solid #007bff",
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #007bff",
        fontSize: "15px",
        minHeight: "60px",
        transition: "all 0.2s ease-in-out",
      },
    },
    pagination: {
      style: {
        justifyContent: "center",
        padding: "20px",
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: () => true,
      style: {
        "&:hover": {
          backgroundColor: "#e3f2fd", // light blue
          borderLeft: "4px solid #007bff",
          cursor: "pointer",
        },
      },
    },
  ];

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f4faff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header & Search */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ color: "#007bff", margin: 0 }}>Website Pages Status</h2>
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
            width: "250px",
            marginTop: "10px",
          }}
        />
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
        pagination
        highlightOnHover
        striped
        responsive
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15]}
        paginationComponentOptions={{
          rowsPerPageText: "Rows per page",
        }}
      />
    </div>
  );
};

export default MyDataTable;
