import React from "react";
import { formateDate } from "../../utils/FormateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9 " >
            Mufizul Islam
          </span>
        </h3>

        <p className="text_para" >
          Dr.Mufizul Islam, founder of the first hospital in Bangladesh, died on Tuesday. He was 81.

          He was admitted to Gonoshasthaya Kendra, the hospital he founded, several days ago in the capital Dhaka and was on life support since Monday, Monjur Kader Ahmed, a senior hospital official, told reporters.

          The hospital started as a makeshift facility to treat the wounded in 1971, when Bangladesh fought a bloody war for independence from Pakistan.

          With time, it grew into a state-of-the-art facility in the capital Dhaka where the poor were treated free of cost

        </p>
      </div>

      <div className="mt-12">

        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold" >Education</h3>
        <ul className="pt-4 md:p-5">

          <li className="flex flex-cols sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] " >

            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold  " >
                {formateDate("12-04-2008")}  -   {formateDate("5-12-2010")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor ">

                PHD in surgeon

              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor ">
              New Apollo Hospital,New York
            </p>

          </li>
          <li className="flex flex-cols sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] " >

            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold  " >
                {formateDate("08-12-2011")}  -     {formateDate("03-04-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor ">

                FCF in surgeon

              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor ">
              New Apollo Hospital,USA london
            </p>

          </li>
        </ul>

      </div>

      <div className=" mt-12 ">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold" >Experience

          <ul className=" grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">

            <li className=" p-4 rounded bg-[#fff9ea]  ">
              <span className="text-yellowColor leading-6 font-semibold text-[15px] ">
                {formateDate("12-04-2015")}  -   {formateDate("5-12-2020")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor ">

                Sr. surgeon

              </p>

              <p className="text-[14px] leading-5 font-medium text-textColor ">
                New Apollo Hospital,USA london
              </p>
            </li>
            <li className=" p-4 rounded bg-[#fff9ea]  ">
              <span className="text-yellowColor leading-6 font-semibold text-[15px] ">
                {formateDate("12-04-2015")}  -   {formateDate("5-12-2020")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor ">

                Sr. surgeon

              </p>

              <p className="text-[14px] leading-5 font-medium text-textColor ">
                New Apollo Hospital,USA london
              </p>
            </li>

          </ul>

        </h3>

      </div>



    </div>
  );
};

export default DoctorAbout;
