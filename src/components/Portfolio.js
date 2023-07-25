import "../Navigation.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  //logic needed for port

  return (
    <div className="actual-content">
      <Card className="project-card" style={{ width: "22rem" }}>
        <Card.Img variant="top" src="https://placekitten.com/100/100" />
        <Card.Body>
          <Card.Title>Bon Voyage</Card.Title>
          <Card.Text>
            Vacation planning site for collaborating with friends
          </Card.Text>
          <Button variant="primary">View Site</Button>
        </Card.Body>
      </Card>
      <Card className="project-card" style={{ width: "22rem" }}>
        <Card.Img variant="top" src="https://placekitten.com/100/100" />
        <Card.Body>
          <Card.Title>Bon Voyage</Card.Title>
          <Card.Text>
            Vacation planning site for collaborating with friends
          </Card.Text>
          <Button variant="primary">View Site</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
