
// Use TanStack Query(it's called also react query)

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useQuery } from "react-query";

const useCart = () => {
    const {user} = useContext(AuthContext);

    const {refetch, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:4000/carts?email=${user?.email}`)
            return res.json();
        }
    })
    return [cart, refetch]
}

export default useCart;