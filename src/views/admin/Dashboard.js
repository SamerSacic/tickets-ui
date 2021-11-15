import DashboardStats from "../../components/Stats/DashboardStats";
import OrderList from "../../components/Order/Recent/OrderList";
import EventCalendar from "../../components/Event/EventCalendar";
import FooterAdmin from "../../components/Common/Footer/FooterAdmin";

const Dashboard = () => {
  return (
    <>
      <DashboardStats />
      <div className="relative px-4 md:px-10 mx-auto w-full pt-6">
        <div className="flex flex-wrap">
          <div className="flex w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <EventCalendar />
          </div>
          <div className="flex w-full xl:w-4/12 px-4">
            <OrderList />
          </div>
        </div>
        <FooterAdmin />
      </div>
    </>
  );
};

export default Dashboard;
