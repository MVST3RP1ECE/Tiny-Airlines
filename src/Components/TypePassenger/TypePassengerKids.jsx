/* eslint-disable react/prop-types */
import React from "react";
import "./TypePassenger.css";
import PassengerCounter from "../PassengerCounter/PassengerCounter";

export default function TypePassengerKids({
  ageGroup,
  ageGroupParams,
  defaultPassengerAmount,
  userPassengerAmount,
  setUserPassengerAmount,
  setUserPassengerAmountText,
}) {
  return (
    <>
      <div className="type_passengers-wrapper">
        <div className="passenger_age-group">
          <div className="age-group-inner--wrapper">
            <span className="age_group">{ageGroup}</span>
            <span className="age_group_params">{ageGroupParams}</span>
          </div>
        </div>
        <div className="wrapper_count-passenger">
          <PassengerCounter
            defaultValue={defaultPassengerAmount}
            userPassengerAmount={userPassengerAmount}
            setUserPassengerAmount={setUserPassengerAmount}
            setUserPassengerAmountText={setUserPassengerAmountText}
            ageGroup={ageGroup}
          />
        </div>
      </div>
    </>
  );
}
