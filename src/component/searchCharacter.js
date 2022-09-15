import React, { useEffect, useState } from "react";
import { Container, Col, Spinner, Button, Form, Row, Alert } from "react-bootstrap";
import CharacterInfoCard from './characterInfoCard';
import { getSearchCharacter } from "../services/pokemanServ.js";



const SearchCharacterPokeman = () => {

  const [characterDetail, setCharacterDetail] = useState([]);
  const [characterNotFound, setScharacterNotFound] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const searchHandler = async (event) => {
    setLoadingSearch(true);
    try {
      const seachValue = event.target.value;
      if (seachValue) {
        const serachData = await getSearchCharacter(seachValue);
        if(serachData?.id){
          setLoadingSearch(false);
          setCharacterDetail(serachData);  
        }else{
          setLoadingSearch(false);
          setScharacterNotFound(true)
        }
      }else{
        setCharacterDetail(null)
        setScharacterNotFound(false)
        setLoadingSearch(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className='mt-5'>
        <Col><h1>
          Search Pokémon Character
        </h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col></Col>
        <Col><Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search Character</Form.Label>
          <Form.Control type="text" name="characterSearch" placeholder="Enter character..." onChange={e => searchHandler(e)} />
          <Form.Text className="text-muted">
            like “ditto”, and see their picture, abilities, stats, and held items
          </Form.Text>
        </Form.Group></Col>
        <Col></Col>
      </Row>
      <Row className='mt-5'>
        <Col></Col>
        <Col>
          {loadingSearch && <Button variant="primary" disabled className='mb-4'>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
          </Button>}
          {characterDetail && characterDetail.id && <CharacterInfoCard characterDetailData = {characterDetail}/>}
          {characterNotFound && <Alert key={'info'} variant={'info'}>
            Character not found please try other character!
          </Alert>}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
export default SearchCharacterPokeman;


