import CardStats from "../Common/CardStats";
import { faCalendarAlt, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

const DashboardStats = () => {
  return (
    <>
      {/* Header */}
      <div className="relative pt-12 pb-6">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full xl:w-6/12 px-4">
                <CardStats
                  statSubtitle="EVENTS"
                  statTitle="35"
                  statArrow="up"
                  statPercent="5"
                  statPercentColor="text-green-500"
                  statDescription="Since last month"
                  statIconName={faCalendarAlt}
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full xl:w-6/12 px-4">
                <CardStats
                  statSubtitle="TICKETS SOLD"
                  statTitle="200"
                  statArrow="down"
                  statPercent="30"
                  statPercentColor="text-red-500"
                  statDescription="Since last week"
                  statIconName={faTicketAlt}
                  statIconColor="bg-yellow-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
