import IconSuccess from "../assets/images/icon-success.svg";

const Success = ({Email, ClickedButton}) => {
  return (
    <section className="text-N_color_Charcoal_Gray md:grid md:min-h-screen md:content-center md:justify-center md:bg-N_color_Dark_S_Gray">
      {/* Success message start */}
      <div className="grid min-h-screen content-between px-7 md:min-h-0 md:max-w-sm md:rounded-3xl md:bg-N_color_White md:px-10 md:shadow-2xl">
        <div className=" mt-7">
          <img src={IconSuccess} alt="" aria-hidden width={64} height={64} />
          <h2 className=" my-5 text-4xl font-bold">Thanks for subscribing!</h2>
          <p className="md:text-sm">
            A confirmation email has been sent to <b>{Email}</b>. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </div>
        <button
          onClick={ClickedButton}
          className=" hover_button ml5 my-5 rounded-lg bg-N_color_Dark_S_Gray p-3 text-N_color_White md:mb-10"
        >
          Dismiss message
        </button>
      </div>
      {/* Success message end */}
    </section>
  );
};

export default Success;
