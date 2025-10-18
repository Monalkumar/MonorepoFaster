import React, { useState, useEffect } from "react";

type ComponentProperty = {
    backgroundColor: string;
    height: string;
}
interface User {
    id: number;
    name: string;
}

const PracticeTypescript = ({ backgroundColor, height }: ComponentProperty) => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const fetchData = async () => {
        setError(null);
        setLoading(true)
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error(`Https err: ${response.status}`)
            }
            const result: User[] = await response.json();
            setUsers(result);
        }
        catch (error: unknown) {
            setError(`please rsolve, ${error.message}`)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div>
            {error && (<h3>error:{error}</h3>)}
            {loading && (<h2>Loading.....</h2>)}
            <h1>{backgroundColor}</h1>
            <h1>{height}</h1>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default PracticeTypescript;