import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';


//Bootstrap
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from 'react-bootstrap';


const HistoricEvent = (props) => {
  return (
    <Col id='eventEntry'>
      <a href={props.url}>
        <Row>
          <h1> Date: {props.date}</h1>
        </Row>
        <Row>
          <h3>{props.description}</h3>
        </Row>
      </a>
    </Col>
  )
}


function App (props) {

  const [isLoaded, setIsLoaded] = useState(false);
  const [pageCount, setPageCount] = useState(5);
  const [events, setEvents] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const fetchedURL = `http://localhost:3000/events?q=${search}&_page=${currentPage}&_limit=${pageCount}`


  function getEvent() {
    axios.get(fetchedURL)
      .then((res) => {
        setEvents(res.data);
        setIsLoaded(true);
      })
  }

  function handlePageClick(searchedEvent) {
    setCurrentPage(searchedEvent.selected);
    getEvent();
  }

  return(
    <Container  fluid>
      <Row>
        <Col id='title'>
        Historical Events Finder
        </Col>
      </Row>
      <Row>
      <Form id='inputBar'>
        <Form.Label id ='inputLabel'> Search:   </Form.Label>
        <Form.Control
          id='inputSearch'
          placeholder='Enter Text Here'
          onChange={(event) => setSearch(event.target.value)}
          name='search'
        />
        <Button
          id='submitButton'
          onClick={getEvent}
        >
          Submit
        </Button>
      </Form>
      </Row>

      <>
          {isLoaded ? (

            events.map((event) => {
              return (
                <HistoricEvent
                  url={event.url}
                  date={event.date}
                  description={event.description}
                />
              );
            })
          ) : (
              <></>
            )}

    {isLoaded ? (
      <Row>

      <Col id='react-paginate'>
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        </Col>

        </Row>
    ) : (
      <Col></Col>
    )}
        </>
    </Container>
  )
}

export default App;
