import useRandomUser from '@/hooks/useRandomUser';

const TableUsers = () => {
    const { users, loading, error } = useRandomUser();

    if (loading) return <div className='d-flex justify-content-center'>
        <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Cargando...</span>
        </div>
    </div>;
    if (error) return <p className='text-center text-danger'>Error: {error.message}</p>;

    return <div className='container'>
        <table className='table table-striped'>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id.value}>
                    <td>{user.name.first} {user.name.last}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default TableUsers;