import Table from "react-bootstrap/esm/Table";

/**
 * 
 * 01. Create a Table (add Headings)
 * 02. Data Loading to the table
 */

export const Item = () => {

    // 01.01 Create a Heading Array
    const tHeadings: string[] = [
        "Item_id",
        "Name",
        "Description",
        "Created_date",
        "Location",
        "Status"
    ];

    return (
        <div>
            <div>
                <h2>Item Table</h2>
                <Table striped bordered hover>
                    <thead>
                        {/* 01.02 Heading add to Table */}
                        <tr>
                            <th scope="col">#</th>
                            {tHeadings.map((heading, index) => (
                                <th key={index} scope="col">{heading}</th>
                            ))};
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
        </div>
    );
}