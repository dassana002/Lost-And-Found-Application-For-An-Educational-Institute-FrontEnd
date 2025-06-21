import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { GetAllItems } from "../../service/Item";
import Button from "react-bootstrap/esm/Button";
import { ItemEdit } from "./ItemEdit";

/**
 * 
 * 01. Create a Table (add Headings)
 * 02. Item Data Loading into the table
 * 03. Item Update Button add into the table , Create a Item Update Component and Show
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
    const [showEditForm, setShowEditForm] = useState(false);

    // 02.01 Load Item Data 
    useEffect(() => {
        const loadData = async () => {
            const allItems = await GetAllItems();
            setitems(allItems);   // items state change
            console.log("Get All Books : ", allItems);
        }
        loadData();
    }, []);

    // 03.02 Item Edit Form Handling
    const handleOnUpdate = async (itemId: string) => {
        setShowEditForm(true); 
    }

    return (
        <div>
            <div>
                {/* <h2>Item Table</h2> */}
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

                            <td>
                                {/* 03.01 Update Button added */}
                                <Button
                                    variant="outline-success"
                                    onClick={() =>
                                        handleOnUpdate(row.itemId)
                                    }
                                >Edit</Button>
                            </td>
                        </tr>
                    ))}
                </Table>
                {/* Item Edit Form Calling*/}
                {
                    <ItemEdit
                        show={showEditForm}
                    />
                }
            </div>
        </div>
    );
} 
