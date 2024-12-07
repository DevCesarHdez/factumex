import { useEffect, useState } from "react";
import axios from "axios";

const useRandomUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => setUsers(res.data.results))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { users, loading, error };
}

export default useRandomUser;