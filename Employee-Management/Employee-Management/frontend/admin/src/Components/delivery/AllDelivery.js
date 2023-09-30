import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./AllDelivery.css";
import DeleteModal from "./DeleteModal";
import { fetchDeliveries } from "../Api/deliveryApi";
import EditModal from "./EditModal";
import { Table } from "semantic-ui-react";
const AllDelivery = () => {
  const [deliveries, setDeliveries] = useState([]);
  useEffect(() => {
    const getDelivery = async () => {
      const data = await fetchDeliveries();
      setDeliveries(data);
    };
    getDelivery();
  }, []);

  return (
    <div className="container mt-5">
      <div className="mt-3 delivery-case">
        <Link className="btn btn-success" to="/addstud">
          ADD DELIVERY
        </Link>
      </div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Delivery Id</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>ACTION</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {deliveries.map((delivery) => (
            <>
              <Table.Row key={delivery._id}></Table.Row>
              <Table.Cell>{delivery._id}</Table.Cell>
              <Table.Cell>{delivery.address}</Table.Cell>
              <Table.Cell>{delivery.status.toUpperCase()}</Table.Cell>
              <Table.Cell>
                {" "}
                <EditModal data={delivery} />
                <DeleteModal deliveryId={delivery._id} />
              </Table.Cell>
              <Table.Row />
            </>
          ))}
        </Table.Body>

        {/* <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer> */}
      </Table>
    </div>
  );
};

export default AllDelivery;
