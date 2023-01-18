import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="my-8 px-6 sm:p-24 sm: bg-orange-900 flex flex-col items-center ">
      <div className="w-full relative before:absolute before:left-0 before:top-0 before:w-full before:h-full content">
        <div className="mb-20 w-full text-center  relative">
          {/* <h2 className="timeline-header__title">Ihza Hasibuan</h2> */}
          <h3 className="text-white/50 text-2xl tracking-[5px] pt-3 pb-6 font-normal">
            Work Experience
          </h3>
        </div>
        <div className="flex my-0 mx-auto flex-wrap flex-col max-w-3xl relative">
          <div
            className="py-8 px-0 w-[50% - 40px] flex relative -translate-y-20timeline-item"
            data-text="Merchandiser"
          >
            <div className="timeline__content">
              {/* <h2 className="py-3 opacity-80 text-white sm:text-xl"> */}
              {/*   PT. Bentoel Group */}
              {/* </h2> */}
              <a href="https://www.bentoelgroup.com/" target="_blank">
                <img
                  className="timeline__img"
                  src="https://www.tobakonis.com/wp-content/uploads/2019/07/000009-00_produk-rokok-bentoel_bentoel-group_800x450_ccpdm-min.jpg"
                  alt="PT. Bentoel Group"
                />
              </a>
              <h2 className="timeline__content-title">
                1 Jan 2016 - 30 Jun 2016
              </h2>
              <p className="timeline__content-desc">
                Plan and develop merchandising strategies that balance customers
                expectations and company’s objectives. Maximize customer
                interest and sales levels by displaying products appropriately.
                Creating and organizing promotions and advertising campaigns.
                Analyzing sales figures - reporting growth, expansion, and
                change in markets.
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text="Acquisition Executive">
            <div className="timeline__content">
              {/* <h2 className="py-3 opacity-80 text-white sm:text-xl"> */}
              {/*   PT. Gojek Indonesia */}
              {/* </h2> */}
              <a href="https://career.gojek.com/" target="_blank">
                <img
                  className="timeline__img"
                  src="https://noir.web.id/wp-content/uploads/2022/08/gofood-white-logo.png.webp"
                  alt="Gofood powered by Gojek"
                />
              </a>
              <h2 className="timeline__content-title">
                1 Jun 2019 - 30 Feb 2021
              </h2>
              <p className="timeline__content-desc">
                Ensure all merchants complete the on-boarding cycle and start
                selling via the Application. In charge of the accounts and sales
                targets of merchants. Plan and create marketing events and
                campaigns to drive sales during major campaign periods.
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text="Sales Hunter">
            <div className="timeline__content">
              {/* <h2 className="py-3 opacity-80 text-white sm:text-xl"> */}
              {/*   PT. Tokopedia */}
              {/* </h2> */}
              <a href="https://www.tokopedia.com/careers" target="_blank">
                <img
                  className="timeline__img"
                  alt="PT. Tokopedia"
                  src="./images/tokped.png"
                />
              </a>
              <h2 className="timeline__content-title">
                1 Sept 2021 - 1 Mar 2022
              </h2>
              <p className="timeline__content-desc">
                Responsible for initiating contact with potential and current
                customers to generate and qualify leads, Promote the company’s
                services, and identify sales opportunities. Developing lists of
                potential prospects
              </p>
            </div>
          </div>
          <div className="timeline-item " data-text="Web Developer">
            <div className="timeline__content">
              {/* <h2 className="py-3 opacity-80 text-white sm:text-xl"> */}
              {/*   PT. Sinar Laut Biru */}
              {/* </h2> */}
              <img
                className="timeline__img "
                src="https://images.unsplash.com/photo-1592963218849-a477763212b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
              />
              <h2 className="timeline__content-title">
                1 Apr 2022 - 30 Des 2022
              </h2>
              <p className="timeline__content-desc">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat. sint cillum sint
                consectetur cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

e;
