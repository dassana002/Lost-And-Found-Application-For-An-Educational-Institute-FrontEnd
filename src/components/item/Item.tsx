import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { GetAllItems } from "../../service/Item";
import Button from "react-bootstrap/esm/Button";

/**
 * 
 * 01. Create a Table (add Headings)
 * 02. Data Loading into the table
 * 03. Update Button add into the table
 */

export const Item = () => {

    // 01.01 Create a Heading Array
    const tHeadings: string[] = [
        "Item_id",
        "Name",
        "Description",
        "Created_date",
        "Location",
        "Status",
        "option"
    ];

    // 02.04 Create Item Interface for State
    interface Items {
        itemId: string;
        name: string;
        description: string;
        createdDate?: string;
        location: string;
        status: string;
    }

    // 02.03 State Update
    const [items, setitems] = useState<Items[]>([]);

    // 02.01 Load Book Data 
    useEffect(() => {
        const loadData = async () => {
            const allItems = await GetAllItems();
            setitems(allItems);   // items state change
            console.log("Get All Books : ", allItems);
        }
        loadData();
    }, []);

    const handleOnUpdate = async(itemId:string)=> {

    }

    return (
        <div>
            <div>
                <h2>Item Table</h2>
                <Table striped bordered hover>
                    <thead>
                        {/* 01.02 Heading add into Table */}
                        <tr>
                            {tHeadings.map((heading, index) => (
                                <th 
                                    key={index} 
                                    scope="col"
                                >{heading}</th>
                            ))};
                        </tr>
                    </thead>
                    {/* 02.04 Data Loading into the table */}

                    {items.map((row) => (
                        <tr key={row.itemId}>
                            {Object.values(row).map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))}
                            {/* 03.01 Update Button added */}
                            <td>
                                <Button 
                                    variant="outline-success" 
                                    onClick={()=>
                                        handleOnUpdate(row.itemId)
                                    }
                                >Edit</Button>
                            </td>
                        </tr>
                    ))}
                </Table>
            </div>
        </div>
    );
} 
