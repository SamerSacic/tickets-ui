import FooterAdmin from "../../components/Common/Footer/FooterAdmin";

const Event = () => {
  return (
    <>
      <div className="relative px-4 md:px-10 mx-auto w-full pt-6">
        <div className="flex flex-wrap">
          <div className="flex w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            Event List
          </div>
          <div className="flex w-full xl:w-4/12 px-4">Content</div>
        </div>
        <FooterAdmin />
      </div>
    </>
  );
};

export default Event;
