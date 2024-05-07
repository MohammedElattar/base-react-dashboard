import CustomTable from "../../../components/CustomTable";

const CategoryTable = () => {
    const serverSideColumns = [
        {
            sortable: true,
            name: 'Full Name',
            minWidth: '225px',
            selector: row => row.full_name
        },
        {
            sortable: true,
            name: 'Email',
            minWidth: '250px',
            selector: row => row.email
        },
        {
            sortable: true,
            name: 'Position',
            minWidth: '250px',
            selector: row => row.post
        },
        {
            sortable: true,
            name: 'Office',
            minWidth: '150px',
            selector: row => row.city
        }
    ];

    const data = [
        {
            responsive_id: '',
            id: 1,
            avatar: '10.jpg',
            full_name: "Korrie O'Crevy",
            post: 'Nuclear Power Engineer',
            email: 'kocrevy0@thetimes.co.uk',
            city: 'Krasnosilka',
            start_date: '09/23/2016',
            salary: '$23896.35',
            age: '61',
            experience: '1 Year',
            status: 2
        }
    ]

    return <CustomTable columns={serverSideColumns} data={data} pagination={false}/>
}

export default CategoryTable;