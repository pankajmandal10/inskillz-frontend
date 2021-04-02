import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import MUIDataTable from "mui-datatables";

const option = {
    filterType: "textField",
    selectableRows: false,
};

const rows = [
    ["12-1-2020", 'Why do we need Digital Marketing', "Find the capital", 'Success'],
    ["12-1-2020", 'Why do we need digital Marketing', "Find the capital", 'Success'],
    ["12-1-2020", 'Why do we need digital Marketing', "Find the capital", 'Success'],
    ["12-1-2020", 'Why do we need digital Marketing', "Find the capital", 'Success'],
    ["12-1-2020", 'Why do we need digital Marketing', "Find the capital", 'Success'],


];
const columns = ["Date", "Chapter Name", "Task Name",
{
    name: "Assignment Status",
    options: {
        filter: true,
        customBodyRender: (value) => {
            return (

                <div style={{ minWidth: "20px" }}>
                    <span className='completedAssign' >Completed</span>
                </div>
            );
        },
    },
},
    {
        name: "",
        options: {
            filter: true,
            customBodyRender: (value) => {
                return (

                    <div style={{ minWidth: "20px" }}>
                        <i  className="fas fa-eye"></i>
                    </div>
                );
            },
        },
    },

];
export default function AssignmentTab() {

    return (
        <div className="payment-table">
            <MUIDataTable
                data={rows}
                columns={columns}
                options={option}
            />
        </div>
    );
}