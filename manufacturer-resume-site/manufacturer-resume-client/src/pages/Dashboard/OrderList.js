import React from 'react';
import useOrderList from '../../hooks/useOrderList';

const OrderList = () => {
   const [orders, setOrders] = useOrderList([]);
   return (
      <div>
         <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
               {
                  orders.map((order, index )=> <tr
                     order = {order}
                  >
                     <th>{index + 1}</th>
                     <td>{order.client}</td>
                     <td>{order.email}</td>
                     <td>{order.service}</td>
                     <td>{order.service}</td>
                   </tr>)
               }
                
              </tbody>
            </table>
          </div>
      </div>
   );
};

export default OrderList;