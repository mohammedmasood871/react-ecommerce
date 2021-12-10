import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, ListGroup, Dropdown } from 'react-bootstrap';
import ProuctList from './produclist';
function product() {
  const [list, setlist] = useState([]);
  const [filterproducts, setfilterprod] = useState([]);

  const [prodname, setprodname] = useState('');
  const [state, setstate] = useState('');
  const [city, setcity] = useState('');

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch('https://assessment-edvora.herokuapp.com')
      .then((res) => res.json())
      .then((data) => {
        setlist(data);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

  // filtering product name start
  const getProducvalue = (event) => {
    console.log(event.target.value);
    setprodname(event.target.value);
    var filteredarray = list.filter((items) => {
      return items.product_name === event.target.value;
    });
    setfilterprod(filteredarray);

    console.log(filteredarray);
  };

  //  filtering product name end

  //  filtering state and product start
  const getStateValue = (event) => {
    setstate(event.target.value);
    var filteredarray = list.filter((items) => {
      return (
        items.product_name === prodname &&
        items.address.state === event.target.value
      );
    });
    setfilterprod(filteredarray);
  };

  // filtering state and product end

  // filterint state, product and city start

  const getCityValue = (event) => {
    setcity(event.target.value);
    var filteredarray = list.filter((items) => {
      return (
        items.product_name === prodname &&
        items.address.state === state &&
        items.address.city === event.target.value
      );
    });
    setfilterprod(filteredarray);
  };
  // filterint state, product and city end

  return (
    <div className="body">
      <Container>
        <Row>
          <Col sm={3}>
            <div className="card">
              <p className="title">Filters</p>
              <hr />
              <ul>
                <li>
                  <select onChange={getProducvalue}>
                    <option value="">All</option>
                    {list.map((item, index) => {
                      return (
                        <option value={item.product_name}>
                          {item.product_name}
                        </option>
                      );
                    })}
                  </select>
                </li>
                <li>
                  <select onChange={getStateValue}>
                    <option value="">State</option>
                    {list.map((item, index) => {
                      return (
                        <option value={item.address.state}>
                          {item.address.state}
                        </option>
                      );
                    })}
                  </select>
                </li>
                <li>
                  <select onChange={getCityValue}>
                    <option value="">City</option>
                    {list.map((item, index) => {
                      return (
                        <option value={item.address.city}>
                          {item.address.city}
                        </option>
                      );
                    })}
                  </select>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={9}>
            <ProuctList prod={filterproducts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default product;
