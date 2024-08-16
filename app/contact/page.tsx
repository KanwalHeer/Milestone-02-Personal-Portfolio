"use client";

// Import react components
import {
  FaCircle,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import contactSchiema from "./formScheima/schiema";
import { contactType, eventTypes } from "../Types/form/data";

function Contact() {
  // Create hook states
  const [contactInfo, setContactInfo] = useState<contactType>({
    name: "",
    email: "",
    phone: 0,
    message: "",
  });
  const [contactList, setContactList] = useState<contactType[]>([]);
  const [errors, setContactErr] = useState<string[]>([]);

  // OnChangeHandler function
  const onChangeHandler = (event: eventTypes) => {
    let contactDetails = {
      ...contactInfo,
      [event.target.name]: event.target.value,
    };
    setContactInfo(contactDetails);
  };

  // OnClickHandler function
  const onClickHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default form submission action

    // Try-catch for catching errors
    try {
      const result = await contactSchiema.validate(contactInfo);
      if (!result) {
        return;
      }
      const newContactList: contactType[] = [...contactList, contactInfo];
      setContactList(newContactList);
      setContactErr([]);

      // Reset the form fields
      setContactInfo({
        name: "",
        email: "",
        phone: 0,
        message: "",
      });
    } catch (err: any) {
      setContactErr(err.errors);
    }
  };

  return (
    <div className="p-8 bg-[#000505]">
      <section className="contact-us bg-[#000505] py-14">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <div className="flex-1 p-4">
            <h6 className="text-4xl mb-6 font-semibold text-white p-4">
              Contact Me
            </h6>

            <form className="grid grid-cols-1 gap-4">
              <input
                onChange={onChangeHandler}
                value={contactInfo.name}
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className="input-field p-4  bg-[#060d0ef1] text-white border border-gray-600 rounded-lg"
              />
              <input
                onChange={onChangeHandler}
                value={contactInfo.email}
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="input-field p-4  bg-[#060d0ef1] text-white border border-gray-600 rounded-lg"
              />
              <input
                onChange={onChangeHandler}
                value={contactInfo.phone}
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                className="input-field p-4  bg-[#060d0ef1] text-white border border-gray-600 rounded-lg"
              />
              <textarea
                onChange={onChangeHandler}
                value={contactInfo.message}
                rows={6}
                id="message"
                name="message"
                placeholder="Message"
                className="input-field p-4  bg-[#060d0ef1] text-white border border-gray-400 rounded-lg"
              />
              <button
                onClick={onClickHandler}
                type="submit"
                className="hero_btn btn py-2 mt-2 px-4 bg-[#060d0ef1] text-white text-xl font-extrabold hover:bg-[#000505] rounded-full border border-gray-600 inline-block"
              >
                Send Message
              </button>
            </form>
            {errors.map((item, index) => (
              <div key={index} style={{ color: "red" }}>
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
