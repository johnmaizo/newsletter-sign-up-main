import {useState} from "react";
import {useForm} from "react-hook-form";

import Success from "./Success";

import IllustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import IconList from "../assets/images/icon-list.svg";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const [show, setShow] = useState(false);
  const [currentEmail, setEmail] = useState("");

  const ClickedButton = () => {
    setShow(!show);
  };

  const onSubmit = async (data) => {
    setEmail(data.Email);
    setShow(true);
    reset();
  };

  return (
    <>
      {/* Sign-up form start */}
      {show && <Success Email={currentEmail} ClickedButton={ClickedButton} />}

      {!show && (
        <section className=" text-N_color_Charcoal_Gray md:grid md:min-h-screen md:content-center md:justify-center md:bg-N_color_Dark_S_Gray">
          <div className=" grid_area rounded-3xl bg-N_color_White md:mx-4 md:grid md:max-w-4xl md:grid-cols-2 md:p-7 md:shadow-2xl">
            <picture className="md:grid_img md:flex md:justify-end">
              <source srcSet={IllustrationDesktop} media="(min-width: 768px)" />
              <img
                src={IllustrationMobile}
                alt=""
                aria-hidden
                className=" w-full md:w-auto md:object-contain"
              />
            </picture>

            <div className="text | md:grid_text px-7 py-7">
              <h1 className=" text-4xl font-bold md:pt-3 md:text-[3.5rem] md:leading-snug">
                Stay updated!
              </h1>
              <p className=" py-4">
                Join 60,000+ product managers receiving monthly updates on:
              </p>

              <ul className="flex flex-col gap-1 md:mt-2 md:gap-3">
                <li className="icon_list">
                  <img
                    src={IconList}
                    alt=""
                    aria-hidden
                    width={21}
                    height={21}
                  />{" "}
                  Product discovery and building what matters
                </li>
                <li className="icon_list">
                  <img
                    src={IconList}
                    alt=""
                    aria-hidden
                    width={21}
                    height={21}
                  />{" "}
                  Measuring to ensure updates are a success
                </li>
                <li className="icon_list">
                  <img
                    src={IconList}
                    alt=""
                    aria-hidden
                    width={21}
                    height={21}
                  />{" "}
                  And much more!
                </li>
              </ul>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex flex-col gap-1 pt-10">
                  <div className="flex justify-between">
                    <label htmlFor="Email" className=" text-sm font-bold">
                      Email address
                    </label>
                    {errors.Email && (
                      <p
                        role="alert"
                        className=" text-sm font-semibold text-[#C67B76]"
                      >
                        {errors.Email?.message}
                      </p>
                    )}
                  </div>
                  <input
                    {...register("Email", {
                      required: {
                        value: true,
                        message: "Please add an email",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Valid email required",
                      },
                    })}
                    placeholder="email@company.com"
                    id="Email"
                    className=" rounded-lg border-2 p-3"
                  />
                  <input
                    type="submit"
                    className="hover_button my-5 cursor-pointer rounded-lg bg-N_color_Dark_S_Gray p-3 text-N_color_White"
                    value="Subscribe to monthly newsletter"
                  />
                </div>
              </form>
            </div>
            {/* Sign-up form end */}
          </div>
        </section>
      )}
    </>
  );
};

export default Form;
