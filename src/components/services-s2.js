import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

class ServicesS2 extends Component{
    render(){
        return(    
            <Container fluid className="services-s2 d-flex minh-50vh bg-light align-items-center py-5 border-top border-dark">
                <Row className="mx-0 w-100">
                    <Col xs={12} md={6} 
                        className="minh-50vh d-flex align-items-center mx-auto">
                        <div className="w-100 text-center">
                            <h2 className="dispaly-6 fw-bold text-secondary text-shadow">
                                Lorem ipsum
                            </h2>
                            <p className="text-muted">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                                ipsam voluptatem quia voluptas
                            </p>
                            <Table hover striped>
                                <thead>
                                    <tr className="text-secondary">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ServicesS2;