import React from 'react';





function SinglePayment(props) {
  const { id, amount, status, receipt_email } = props.payment;

  return (
    <tr>
    <td>{id}</td>
    <td>{amount}</td>
    <td>{status}</td>
    <td>{receipt_email}</td>
  </tr>
  );
}

export default SinglePayment;


