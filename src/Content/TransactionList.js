import React from "react";

import { IoMdWater, IoMdCheckbox, IoIosClipboard, IoMdStar, IoMdNotifications } from "react-icons/io";

export default function TransactionList() {
  const today = [
    {
      name: "Water Bill",
      status: "Unsuccessfuly",
      price: "-$280",
    },
  ];

  const yesterday = [
    {
      name: "Water Bill",
      status: "Unsuccessfuly",
      price: "-$280",
    },
    {
      name: "Income: salary Oct",
      status: "success",
      price: "$280",
    },
    {
      name: "Electric Bill",
      status: "pedning",
      price: "$80",
    },
    {
      name: "Income: Jane transfers",
      status: "success",
      price: "$560",
    },
    {
      name: "Internet Bill",
      status: "warning",
      price: "-$280",
    },
  ];

  const bgColor = (status) => {
    switch (status) {
      case "success":
        return "bg-blue-500";

      case "pedning":
        return "bg-yellow-400";

      case "warning":
        return "bg-red-500";

      default:
        return "bg-teal-500"
    }
  };

  const txColor = (status) => {
    switch (status) {
      case "success":
        return "text-blue-500";

      case "pedning":
        return "text-yellow-400";

      case "warning":
        return "text-red-500";

      default:
        return "text-teal-500"
    }
  };

  const icons = (status) => {
    switch (status) {
      case "success":
        return <IoMdCheckbox />;

      case "pedning":
        return <IoIosClipboard />;

      case "warning":
        return <IoMdStar />;

      default:
        return <IoMdNotifications />
  }
}

  return (
    <section>
      <div className="mt-10">
        <h3>Today</h3>
        <div>
          {today.map((val,index) => {
            return (
              <div key={index} className="flex flex-row items-center border-b border-b-200 py-3">
                <div className="h-10 w-10 bg-indigo-900 rounded-lg flex items-center justify-center">
                  <IoMdWater color="white" />
                </div>
                <div className="flex-1 ml-5">
                  <div className="text-black">{val.name}</div>
                  <div className="text-red-500">{val.status}</div>
                </div>
                <div className="text-red-500">{val.price}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <h3>yesterday</h3>
        <div>
          {yesterday.map((val, index) => {
            return (
              <div key={index} className="flex flex-row items-center py-3">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${bgColor(val.status)}`}>
                  {icons(val.status)}
                </div>
                <div className="flex-1 ml-5">
                  <div className="text-black">{val.name}</div>
                  <div className= {txColor(val.status)}>{val.status}</div>
                </div>
                <div className= {txColor(val.status)}>{val.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
