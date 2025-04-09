import React from "react";
import { Alert, Container } from "react-bootstrap";

const Error = ({
  message = "È successo qualcosa di brutto, brutto, brutto!",
}) => {
  return (
    <Container className="my-4">
      <Alert variant="danger" className="text-center">
        {message}
      </Alert>
    </Container>
  );
};

export default Error;
