import DeleteDropDownItem from "../../../components/table/dropDownItems/DeleteDropDownItem";
import EditDropDownItem from "../../../components/table/dropDownItems/EditDropDownItem";
import TableActions from "../../../components/table/dropDownItems/TableActions";
import { parseRoute } from "../../../helpers/routeHelper";

const generateActions = row => {
    const actions = [
        <EditDropDownItem href={parseRoute()} key={0}/>,
        <DeleteDropDownItem key={1}/>
    ]

    return <TableActions row={row} actions={actions}/>
}

const columns = [
    {
        sortable: true,
        name: 'ID',
        minWidth: '225px',
        selector: row => row.id
    },
    {
        sortable: true,
        name: 'Name',
        minWidth: '250px',
        selector: row => row.name
    },
    {
        name: 'Actions',
        minWidth: '100px',
        cell: row => generateActions(row)
      }
];

export default columns;