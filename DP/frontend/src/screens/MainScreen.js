import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export function Mainscreen() {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="images/green.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Save trees, save nature</h1>
              <h2>
                Refraining from cutting trees will help save Mother Nature.
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="images/desert.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Don’t Let Our Future Dry Up</h1>
              <h2>
                Give It A chance to rain, Let It Pour, Without Water, the Land
                Is Sore
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2975498/pexels-photo-2975498.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Promote Climate Action</h1>
              <h2>The climate is changing, so should we</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/light.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Trees are the lungs of the world</h1>
              <h2>Plant a tree today; it will help us breathe tomorrow.</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="space"></div>
      <div>
        <Row>
          <Col className="col-md ">
            <Card className="main-card" style={{ border: 'none' }}>
              <Card.Img
                className="card-img-top-main"
                variant="top"
                src="https://media.istockphoto.com/id/484011396/pl/zdj%C4%99cie/piank%C4%99-i-jagody.jpg?s=612x612&w=0&k=20&c=KO88MEV_e6mWmWBDsCzMyFDgXsq8X5p4N34W_Jvx3Wk="
              />
              <Card.Body>
                <Card.Title>Plant Portfolio</Card.Title>
                <Card.Text>
                  Browse through the diverse collection of plant species to
                  learn more about distribution of plants.
                </Card.Text>
                <Button variant="outline-success " href="encyclopedia">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-md-4">
            <Card className="main-card" style={{ border: 'none' }}>
              <Card.Img
                className="card-img-top-main"
                variant="center"
                src="https://media.istockphoto.com/id/1060517956/pl/zdj%C4%99cie/doro%C5%9Bli-baby-hand-drzewo-%C5%9Brodowiska-dzie%C5%84-ziemi-w-r%C4%99kach-drzew-rosn%C4%85cych-sadzonek-bokeh.jpg?s=612x612&w=0&k=20&c=e5uiq6jM4wBtfnfInDz96oU8GjTiwDmJuLPfVLKYK58="
              />
              <Card.Body>
                <Card.Title>Gift Trees</Card.Title>
                <Card.Text>
                  Make your own impact in supporting climate action initaitves,
                  while promoting biodiversity.
                </Card.Text>
                <Button variant="outline-success" href="shop">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4">
            <Card className="main-card" style={{ border: 'none' }}>
              <Card.Img
                className="card-img-top-main"
                variant="center"
                src="https://media.istockphoto.com/id/1336896572/pl/zdj%C4%99cie/koncepcja-rezerwat-przyrody-rezerwat-przyrody-tygrys-jele%C5%84-globalne-ocieplenie-%C5%BCywno%C5%9B%C4%87.jpg?s=612x612&w=0&k=20&c=9HAnIsf_yhS9RtH0NirGo35Oj4tkio90OKkG65uXxa8="
              />
              <Card.Body>
                <Card.Title>Protect Wildlife</Card.Title>
                <Card.Text>
                  Extinction is forever. Help make the environment a fairer
                  place for animals.
                </Card.Text>
                <Button variant="outline-success" href="about">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="space"></div>
        <Row>
          <Col>
            <div>
              <p className="final-para">
                <h2>How It Works</h2>
                We plant trees where they're needed most. Browse through our
                plant portfolio to learn more and advance your understanding of
                the past and current distribution of plants, plant systematics
                and taxonomy. Choose the cause closest to your heart and the
                amount of trees you’d like to plant. Receive our email that you
                can customize to include the recipient’s name. And much more!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className=" space"></div>

          <Col>
            <article className="contains">
              <Col className="texts">
                <h2>The Effects</h2>
                Global climate change is not a future problem. Changes to
                Earth’s climate driven by increased human emissions of
                heat-trapping greenhouse gases are already having widespread
                effects on the environment: glaciers and ice sheets are
                shrinking, river and lake ice is breaking up earlier, plant and
                animal geographic ranges are shifting, and plants and trees are
                blooming sooner.But we could really use more trees. It’s the
                easiest way to fight climate change, protect wildlife, and help
                vulnerable communities cope with the climate crisis.
              </Col>
              {/* 
              <img
                className="final-img"
                alt="no Image"
                src="https://cdn.shopify.com/s/files/1/0506/3055/7870/files/ZigZag1_704x544.png?v=1637231103"
              ></img> */}
            </article>
          </Col>
        </Row>
        <Row>
          <div className=" space"></div> <div className=" space"></div>
          <Col>
            <article className="contains">
              <Col>
                <img
                  className="final-img"
                  src="https://cdn.shopify.com/s/files/1/0506/3055/7870/files/ZigZag2_704x544.png?v=1637231123"
                  alt="text"
                ></img>
              </Col>
              <Col className="texts">
                <h2>What We Can Do</h2>
                Every year approximately 12 million hectares of forest are
                destroyed and this deforestation, together with agriculture and
                other land use changes, is responsible for roughly 25 per cent
                of global greenhouse gas emissions. We can all play a part in
                reversing this trend by planting trees, either individually or
                as part of a collective. For example, the Plant-for-the-Planet
                initiative allows people to sponsor tree-planting around the
                world. Encourage your friends, family and co-workers to reduce
                their carbon pollution. If you can, switch to a zero-carbon or
                renewable energy provider. Install solar panels on your roof. Be
                more efficient: turn your heating down a degree or two, if
                possible. Switch off appliances and lights when you are not
                using them and better yet buy the most efficient products in the
                first place (hint: this will save you money!). Insulate your
                loft or roof: you’ll be warmer in the winter, cooler in the
                summer and save some money too.
              </Col>
            </article>
          </Col>
        </Row>
        <div className="space"></div>
        <Row>
          <Col>
            <div>
              <p className="final-para">
                Vegetation and green cover are crucial to our eco-system and
                critical natural resources, seeing as how they produce oxygen,
                which is essential for the existence and survival of nearly
                every species on this planet. We could really use more trees.
                It’s the easiest way to fight climate change, protect wildlife,
                and help vulnerable communities cope with the climate crisis.
                So, by causing or playing a role in deforestation, we are not
                only endangering our lives, we are also putting the entire
                planet at risk.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className=" space"></div> <div className=" space"></div>
          <Col>
            <article className="contain">
              <Col className="text">
                <img
                  className="final-img"
                  src="https://cdn.shopify.com/s/files/1/0506/3055/7870/files/info-img_3x_5acb635d-67f0-43fc-9dca-89e496333c91_704x704.png?v=1637228343"
                  alt="text"
                ></img>
                <div className=" space"></div>
                <h2>CLIMATE CHANGE IS PUTTING PRESSURE ON WILDLIFE</h2>
                <div className=" space"></div>
                As our planet heats up, we’re living through more extreme
                weather, floods, fires and droughts. Wild animals are struggling
                to cope – food disappearing, water drying up, their homes
                destroyed. It can feel scary and overwhelming, but we have the
                solutions. Together, we can create a better future for wildlife
                and for people. We’re defending wild places, restoring forests
                and fighting to limit global warming. That’s good news for
                wildlife, and for us all.
              </Col>
            </article>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Mainscreen;
