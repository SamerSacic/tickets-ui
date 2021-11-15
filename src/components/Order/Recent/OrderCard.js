const OrderCard = ({ order }) => {
  return (
    <li className="mb-3 text-gray-600 p-2 border-b border-solid">
      <h6 className="mb-2">{order.event.name}</h6>
      <p className="mb-2">
        <strong>{order.ticket.reference}</strong> -{" "}
        <strong>{order.client.name}</strong> registered 3 tickets(s)
      </p>
      <h6>
        3 days ago •{" "}
        <span className="text-green-500">${order.ticket.amount}</span>
      </h6>
    </li>
  );
};

export default OrderCard;
