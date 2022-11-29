import React from "react";

import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

import Visa from "../assets/visa.png";
import TransactionList from "./TransactionList";

export default function ContentRight() {
  return (
    <section className="w-96 bg-gray-100 rounded-tl-70px overflow-hidden px-8">
      <div className="pt-12 flex justify-end space-x-9 items-center">
        <GrNotification size={20} />
        <BiUser size={20} />
        <img
          src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User"
          className="h-9 w-9 object-cover rounded-full"
        />
      </div>
      <div className="card mt-12">
        <div className="relative p-5">
          <div className="text-white text-lg font-semibold">IT'S HATEM</div>
          <div className="mt-7 space-y-3">
            <div className="text-white">Pay Me</div>
            <div className="text-white">4756 .... .... 5466</div>
            <div className="flex justify-between relative">
              <img src={Visa} alt="visa icon" className="h-4" />
              <span className="text-white">$3.469.52</span>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <button className="py-3 border-dashed border-2 rounded-lg border-gray-400 w-full mt-10">
          Add new card
        </button>
      </div>
      <TransactionList />
    </section>
  );
}
