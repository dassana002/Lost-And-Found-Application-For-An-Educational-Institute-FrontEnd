import Table from "react-bootstrap/esm/Table";

export const Request = () => {

    // Heading Array
    const theadings: string[] = [
        
    ];
    
    return (
        <div>
            <h2>Request Table</h2>
            <Table striped bordered hover>
                <thead>
                    {/* Heading */}
                    <tr>
                        <th scope="col">#</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

