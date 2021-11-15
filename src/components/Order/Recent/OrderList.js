import OrderCard from "./OrderCard";

const OrderList = () => {
  const orders = [
    {
      id: 1,
      event: {
        name: "MegaWatt",
      },
      client: {
        name: "Samer Sacic",
      },
      ticket: {
        reference: "#H64P91211",
        amount: 120.0,
      },
    },
    {
      id: 2,
      event: {
        name: "MegaWatt",
      },
      client: {
        name: "Mujo Mujic",
      },
      ticket: {
        reference: "#UAGIT286",
        amount: 80.0,
      },
    },
    {
      id: 3,
      event: {
        name: "MegaWatt",
      },
      client: {
        name: "John Doe",
      },
      ticket: {
        reference: "#NBWYC286",
        amount: 150.0,
      },
    },
    {
      id: 4,
      event: {
        name: "MegaWatt",
      },
      client: {
        name: "Samer Sacic",
      },
      ticket: {
        reference: "#XAPUN111",
        amount: 200.0,
      },
    },
    {
      id: 5,
      event: {
        name: "MegaWatt",
      },
      client: {
        name: "Samer Sacic",
      },
      ticket: {
        reference: "#SK7JX1211",
        amount: 120.0,
      },
    },
    {
      id: 6,
      event: {
        name: "MegaWatt",
      },
      client: {
        name: "Samer Sacic",
      },
      ticket: {
        reference: "#H64P91211",
        amount: 120.0,
      },
    },
  ];
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-400 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-gray-700 text-xl font-semibold">
                Recent Orders
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-350-px">
            <ul>
              {orders.map((order) => (
                <OrderCard order={order} key={order.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
