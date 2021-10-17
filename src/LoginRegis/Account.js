import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col, Table } from 'antd';
import './Account.css'
import { useHistory } from "react-router";

const { Column } = Table;


function Account() {

  const [excel, setExcel] = useState([]);
  const url = "https://sheet.best/api/sheets/af71385a-37a0-4d19-9822-e0ffdd1418f5"

  const getDataExcel = useCallback(async () => {
    try {
      const res = await Axios.get(url)
      console.log(res.data);
      const data = res.data.map((data, index) => {
        return {
          no: index + 1,
          key: index,
          fistname: data.username,
          password: data.password,
          age: data.age,
          tel: data.tel,
          address: data.address
        }
      })
      setExcel(data)
    } catch (error) {
      console.log(error.message);
    }
    // await Axios.get(url)
    //     .then((res) => {
    //         console.log("res", res)

    //         setExcel(res.data.map((data, index) => {
    //             return {
    //                 no: index + 1,
    //                 key: index,
    //                 fistname: data.username,
    //                 password: data.password,
    //                 age: data.age,
    //                 tel: data.tel,
    //                 address: data.address
    //             }
    //         }))
    //     }).catch((error) => {

    //     });

  }, [])
  useEffect(() => {
    getDataExcel();
  }, [])

  const history = useHistory();

  return (
    <div className="acc-size">
      <div>
        Account Page
      </div>
      <Row style={{ marginTop: 24 }}>
        <Col span={32}>
          <Table dataSource={excel} bordered>
            <Column title="No" width="20%" align="center" dataIndex="no" />
            <Column title="First Name" width="20%" align="center" dataIndex="fistname" />
            <Column title="Password" width="20%" align="center" dataIndex="password" />
            <Column title="Tel" width="20%" align="left" dataIndex="tel" />
            <Column title="Address" width="20%" align="center" dataIndex="address" />
          </Table>
        </Col>
      </Row>
      <div style={{
        fontSize: "20px",
        padding: "5px"
      }}>
        <button onClick={() => history.push({ pathname: "/Success" })}>
          Back to Home Login
        </button>
      </div>
    </div>
  )
}

export default Account
