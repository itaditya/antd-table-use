import React from "react";
import Table from "antd/lib/table";
import "antd/lib/table/style/css";
import Button from "antd/lib/button";
import "antd/lib/button/style/css";

import styles from "./style.module.css";
import { actionService } from "./eventService";
import { StatusTag } from "../StatusTag";

const EventsTable = ({ eventsData }) => {
  const tableColumns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "id"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      key: "fileType"
    },
    {
      title: "Process",
      dataIndex: "process",
      key: "process"
    },
    {
      title: "Performed By",
      dataIndex: "performedBy",
      key: "performedBy"
    },
    {
      title: "Operation Note",
      dataIndex: "operationNote",
      key: "operationNote"
    },
    {
      title: "Update Date / Time",
      dataIndex: "updatedAt",
      key: "updatedAt"
    },
    {
      title: "Status",
      key: "status",
      render: (text, record) => <StatusTag status={record.status} />
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleAction(record)}>
          Action
        </Button>
      )
    }
  ];

  const handleAction = currentEvent => {
    actionService(currentEvent);
  };

  return (
    <section className={styles.container}>
      <h1>Events</h1>
      <Table dataSource={eventsData} columns={tableColumns} />
    </section>
  );
};

export { EventsTable };
