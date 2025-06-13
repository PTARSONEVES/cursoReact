import { useEffect, useState } from "react";

export const useParams = (munid, ufid) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchParamsUrl = () => {
            setLoading(true);
            try {
                localStorage.setItem('munid', munid);
                localStorage.setItem('ufid', ufid);
            } catch (error) {
                console.log(error.message);
                setError("FRONT - Houve algum erro ao carregar os dados!");
            }
            setLoading(false);
        };
        fetchParamsUrl();
    }, [loading, error, munid, ufid]);

    return { loading, error };
};