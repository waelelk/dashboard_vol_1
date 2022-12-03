import React from "react";

import {
  BiCreditCard,
  BiDoughnutChart,
  BiHome,
  BiSearch,
  BiUser,
  BiTrash,
} from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

export default function ContentLeft() {
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div className="flex items-center px-4">
          <BiTrash size={25} color={"white"} />
        </div>
      </SwipeAction>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div className="flex items-center px-4 ">
          <FiEdit2 size={25} color={"white"} />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <section className="content-left flex-1 px-16 pt-14 h-screen overflow-y-scroll">
      <div className="border border-gray-300 rounded-lg w-full items-center flex py-3 px-3">
        <BiSearch className="mr-2 text-gray-400" />
        <input type={"text"} className="flex-1" placeholder="Search..." />
      </div>
      <h3 className="text-xl text-indigo-700 my-8">
        Welcome back Wael Elkezza!
      </h3>
      <div className="flex flex-row space-x-4">
        <Card
          bgColor={"bg-green-600"}
          textColor={"text-green-600"}
          icon={<BiCreditCard size={25} />}
          label={
            <span className="text-sm">
              Trasnfer via
              <br />
              card number
            </span>
          }
        />
        <Card
          bgColor={"bg-purple-500"}
          textColor={"text-purple-500"}
          icon={<BiDoughnutChart size={25} />}
          label={
            <span className="text-sm">
              Trasnfer to
              <br />
              another account
            </span>
          }
        />
        <Card
          bgColor={"bg-orange-500"}
          textColor={"text-orange-500"}
          icon={<BiUser size={25} />}
          label={
            <span className="text-sm">
              Trasnfer to
              <br />
              the same account
            </span>
          }
        />
        <Card
          bgColor={"bg-teal-500"}
          textColor={"text-teal-500"}
          icon={<BiHome size={25} />}
          label={
            <span className="text-sm">
              Trasnfer to
              <br />
              the same account
            </span>
          }
        />
      </div>
      <div className="mt-16 space-y-4">
        {Array.from(Array(8)).map((_,index) => (
          <div key={index} className="rounded-2xl bg-red-400">
          <SwipeableList threshold={0.9} type={Type.IOS}>
            <SwipeableListItem trailingActions={trailingActions()}>
              <div className="bg-white p-3 rounded-xl border border-gray-200 w-full flex items-center">
                <img
                  src={
                    "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="img"
                  className="w-8 h-8 rounded-full object-cover mr-3"
                />
                <div className="text-base space-y-1">
                  <div className="text-gray-900">Wael Tk 1</div>
                  <div className="text-gray-400 text-xs">+60173703116</div>
                </div>
              </div>
            </SwipeableListItem>
          </SwipeableList>
        </div>
        ))}
      </div>
    </section>
  );
}

function Card(props) {
  return (
    <div
      className={`rounded-xl ${props.bgColor} bg-opacity-20 p-4 py-4 w-32 ${props.textColor}`}
    >
      <div className="mb-6">{props.icon}</div>
      {props.label}
    </div>
  );
}
