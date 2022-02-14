import React, { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react";
import axios from "axios";

const Cv = () => {
  const [cv, setCv] = useState({});

  const fetchPersonalData = async () => {
    const response = await axios.get("./data/cv.json");
    setCv(response.data);
  };

  useEffect(() => {
    fetchPersonalData();
  }, []);

  const workList = cv.work?.map((job) => {
    return (
      <div key={job.name}>
        <h4 className="name">Company: {job.name}</h4>
        <p className="position">Position: {job.position}</p>
        <p className="summary">Summary: {job.summary}</p>
      </div>
    )
  });

  return (
    <Container>
      <Header id="cv-header">My CV Header</Header>
      <div id="basics">
        <h3 className="name">Name: {cv.name}</h3>
        <h3 className="label">Title: {cv.label}</h3>
        <h3 className="email">email: {cv.email}</h3>
      </div>
      <div id="work">
        {workList}
      </div>
    </Container>
  );
};

export default Cv;
