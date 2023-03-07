import { Container, Button, Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardSidebar = () => {
  const users = useSelector((state) => state.content.slice(0, 5));

  console.log(users);
  return (
    <Container>
      {users
        /* .filter((el) => el.image !== "") */
        .map((user) => (
          <Row className="d-flex flex-row align-items-center px-2">
            <Card key={user._id} className="cardImgsideBar d-flex flex-row">
              <Card.Img
                variant="top"
                src={user.image}
                alt="foto"
                className="fotoTonde"
              />
              <Card.Body>
                <Card.Title>
                  {user.name} {user.surname}
                  <span className="text-muted fs-6 ms-1">• 3°+</span>
                </Card.Title>
                <Card.Text>{user.title}</Card.Text>
                <Link className="nav-link" to="/profile/:userId">
                  <Button className="my-2 bottoneSideBar">
                    <BsFillPersonPlusFill className="me-2" />
                    Collegati
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Row>
        ))}
    </Container>
  );
};

export default CardSidebar;
