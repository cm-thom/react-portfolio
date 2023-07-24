import "../Navigation.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  //logic needed for port

  return (
    <div className="actual-content">
      portfolio content
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://placekitten.com/100/100" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
