import React from "react";
import SubscriptionForm from "../components/SubscriptionForm";
const About = () => {
  return (
    <div>
      <div className=" lg:flex lg:justify-between lg:mx-20 lg:space-x-10">
        <div className=" lg:w-3/5 lg">
          <div className=" px-4 py-2 text-justify md:w-[80vw] md:mx-auto lg:w-auto">
            <div
              className="capitalize font-garamond text-3xl p-1 italic bg-clip-text text-transparent"
              style={{
                backgroundImage: "url('./src/assets/nav.png')",
                backgroundSize: "cover",
              }}
            >
              The story of OnyiiFabrics
            </div>
            <div className=" font-garamond text-lg">
              At onyiiFabrics, our mission is simple: to empower tailors and
              small clothing businesses by providing high-quality trimmings and
              essential materials that elevate every creation. Founded two years
              ago by Onyinye, onyiiFabrics was born out of a passion for
              supporting the fashion industry and a recognition of the
              challenges tailors face in sourcing the right materials. With a
              clear vision to bridge that gap, Onyinye has worked tirelessly to
              create a brand that tailors, designers, and businesses can trust
              to deliver exceptional products and unmatched service.
            </div>
            <div
              className="capitalize font-garamond text-3xl p-1 italic bg-clip-text text-transparent mt-3 mb-2"
              style={{
                backgroundImage: "url('./src/assets/nav.png')",
                backgroundSize: "cover",
              }}
            >
              Empowering Through Innovation
            </div>
            <div className=" font-garamond text-lg">
              To bring this vision to life, Onyinye partnered with 6ix, a
              skilled developer who helped design and implement a robust online
              platform for onyiiFabrics. The result is a website equipped with
              the functionality and efficiency required to meet our customers'
              demands. From an intuitive ordering system to a well-structured
              inventory management system, our platform ensures that every order
              is processed smoothly and accurately.
            </div>
            <div
              className="capitalize font-garamond text-3xl p-1 italic bg-clip-text text-transparent mt-3 mb-2"
              style={{
                backgroundImage: "url('./src/assets/nav.png')",
                backgroundSize: "cover",
              }}
            >
              What Sets Us Apart
            </div>
            <ul className="list-disc list-inside font-garamond text-lg pl-5 ">
              <li>
                Timely Deliveries: We know that in the fashion industry, every
                second counts. That’s why we’ve prioritized reliable delivery
                services to keep your operations running smoothly.
              </li>
              <li>
                High-Quality Products: From buttons to trimmings and everything
                in between, our materials are curated to meet the highest
                standards, ensuring your projects stand out.
              </li>
              <li>
                Customer-Centric Approach: Your success is our priority. We
                focus on understanding your needs and providing personalized
                support to help you achieve your goals.
              </li>
            </ul>
            <div
              className="capitalize font-garamond text-3xl p-1 italic bg-clip-text text-transparent mt-3 mb-2"
              style={{
                backgroundImage: "url('./src/assets/nav.png')",
                backgroundSize: "cover",
              }}
            >
              Why choose onyiifabrics?
            </div>
            <div className=" font-garamond text-lg">
              Our dedication to quality and service goes beyond providing
              products. We aim to create lasting partnerships with our clients
              by ensuring they can rely on us to deliver what they need, when
              they need it. Whether you’re an independent tailor working on
              custom designs or a growing business scaling your operations,
              onyiiFabrics is here to support you every step of the way.
            </div>
            <div
              className="capitalize font-garamond text-3xl p-1 italic bg-clip-text text-transparent mt-3 mb-2"
              style={{
                backgroundImage: "url('./src/assets/nav.png')",
                backgroundSize: "cover",
              }}
            >
              our promise
            </div>
            <div className=" font-garamond text-lg">
              At onyiiFabrics, we promise to:
            </div>
            <ul className="list-disc list-inside font-garamond text-lg pl-5">
              <li>
                Offer premium materials that enhance the quality of your work.
              </li>
              <li>
                Provide a seamless shopping experience backed by technology and
                innovation.
              </li>
              <li>Deliver exceptional service tailored to your needs.</li>
            </ul>
          </div>
        </div>
        <div className=" lg:w-3/5 flex items-stretch">
          <div className=" mx-auto ">
            <img
              src="./src/assets/fff.jpg"
              alt="owner profile"
              className="rounded-2xl w-96 h-96 mx-auto lg:w-full lg:h-auto max-h-[1200px] object-cover lg:mb-0 lg:mt-8"
            />
          </div>
        </div>
      </div>
      <div className=" font-garamond text-md tracking-widest mx-auto text-red-import px-7 py-4 font-bold md:px-3 text-center ">
        let us be your trusted partner in tailoring excellence. Together we can
        create something beautiful.
      </div>
      <SubscriptionForm />
    </div>
  );
};
export default About;

// className=" capitalize font-garamond text-3xl p-1"
