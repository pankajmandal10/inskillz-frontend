import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import MUIDataTable from "mui-datatables";

const option = {
	filterType: "textField",
	selectableRows: false,
  };

const rows = [
  ["1",  'Why do we need digital Marketing',  "234342343",'INR 4000', 'Success' ],
  ["1",  'Why do we need digital Marketing',  "234342343",'INR 4000', 'Success' ],
  ["1",  'Why do we need digital Marketing',  "234342343",'INR 4000', 'Success' ],
  ["1",  'Why do we need digital Marketing',  "234342343",'INR 4000', 'Success' ],
  ["1",  'Why do we need digital Marketing',  "234342343",'INR 4000', 'Success' ],
 
 
];
const columns = ["ID", "Course Name","Transaction ID", "Amount", "Transaction Status",
{
  name: "Edit",
  options: {
  filter: true,
  customBodyRender: (value) => {
    return (
     
    <div style={{minWidth:"20px"}}>
<i className="fas fa-edit fa-lg"></i>      
    </div>
    );
  },
  },
},

];
export default function DataTable() {
    
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