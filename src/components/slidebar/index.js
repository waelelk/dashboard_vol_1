import React from "react";

import { BiHomeAlt, BiCategory, BiCreditCardAlt } from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";

export default function Slidebar() {
  const menu = [
    { name: "Home", icon: <BiHomeAlt /> },
    { name: "Account", icon: <BiCategory /> },
    { name: "Cards", icon: <BiCreditCardAlt /> },
    { name: "Inovices", icon: <TbFileInvoice /> },
    { name: "Settings", icon: <RiSettings5Line /> },
  ];

  const schedulePayments = ["Monthly Rent", "Food Payment", "Utitlity Bills"];

  return (
    <div className="h-screen border-r border-fray-200 w-64">
      <div className="flex flex-row items-center border-b border-fray-200 py-4">
        <h1 className="font-bold text-indigo-600 ml-9">Dashnoard_Vol_1</h1>
      </div>

      <div className="pt-6 py-12 ml-9">
        <ul className="space-y-6">
          <div className="font-bold text-indigo-600">Menu</div>
          {menu.map((val, index) => {
            return (
              <div>
                <button
                  key={index}
                  className="flex flex-row items-center text-gray-500"
                >
                  <span className="mr-2">{val.icon}</span>
                  <span>{val.name}</span>
                </button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="border-b border-fray-200"></div>

      <div className="mt-6 ml-9">
        <div className="font-bold text-indigo-700">Sceduled Paymeny</div>
        <div>
          <div className="space-y-6 py-6">
            {schedulePayments.map((val) => {
              return (
                <div className="flex flex-row items-center text-gray-500">
                  <div className="h-4 w-4 border border-gray-200 mr-2 rounded-full"></div>
                  <spam>{val}</spam>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
