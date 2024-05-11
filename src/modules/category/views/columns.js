import DeleteDropDownItem from "../../../components/table/dropDownItems/DeleteDropDownItem";
import EditDropDownItem from "../../../components/table/dropDownItems/EditDropDownItem";
import TableActions from "../../../components/table/dropDownItems/TableActions";

const generateActions = (row, props) => {
    const {handleOpen, setOpen, showOne, handleDelete} = props;

    const actions = [
        <EditDropDownItem key={0} onClick={() => {
            showOne(row.id)
            handleOpen(false)
            setOpen(true)
        }}/>,
        <DeleteDropDownItem key={1} handleDelete={() => handleDelete(row.id)}/>
    ]

    return <TableActions row={row} actions={actions}/>
}

const getColumns = (props) => {
    return [
        {
            sortable: true,
            name: 'ID',
            minwidth: '225px',
            selector: row => row.id
        },
        {
            sortable: true,
            name: 'Name',
            minwidth: '250px',
            selector: row => row.name
        },
        {
            name: 'Actions',
            minwidth: '100px',
            cell: row => generateActions(row, props)
        }
    ];
}

export default getColumns;