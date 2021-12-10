import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import { Container, Row, Col, ListGroup, Dropdown } from 'react-bootstrap';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ProuctList(props) {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const { prod } = props;
  if (prod.length < 0) {
    return <p>Please select the product</p>;
  } else {
    return (
      <>
        <div className="App">
          <Row>
            <Col>
              <h2>Edvora</h2>
              <div>
                <h4>Products</h4>

                <span>Product Name</span>

                <hr />
              </div>
            </Col>
          </Row>
          <div className="controls-wrapper"></div>
          <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints}>
              {prod.map((items) => {
                return (
                  <div className="product-card">
                    <Row>
                      <Col sm={4}>
                        <img src={items.image} alt="" className="proimage" />
                      </Col>
                      <Col sm={8}>
                        <h4>{items.product_name}</h4>
                        <div>
                          <span>{items.brand_name}</span>

                          <div>
                            <span> {items.price}</span>
                          </div>

                          <hr />
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
export default ProuctList;
