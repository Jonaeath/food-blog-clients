import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const AllUsers = () => {

    const {data: users = [], refetch} = useQuery(['users'], async ()=>{
        const res = await fetch('http://localhost:4000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:4000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount) {
                refetch()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is an Admin Now`,
                  showConfirmButton: false,
                  timer: 1500,
                })
            }
        })
    }


    

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this user?');
    if (proceed) {
      fetch(`http://localhost:4000/delete/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            alert('User deleted successfully.');
          } else {
            alert('Failed to delete user: ' + data.message);
          }
        })
        .catch((err) => console.error(err))
    }

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td> 
                                <td><button onClick={() => handleDelete(user._id)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                            )}                                                 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;