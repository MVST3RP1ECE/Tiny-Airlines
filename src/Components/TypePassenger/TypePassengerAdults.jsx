/* eslint-disable react/prop-types */
import React from "react";
import "./TypePassenger.css";
import PassengerCounter from "../PassengerCounter/PassengerCounter";

export default function TypePassengerAdults({
  ageGroup,
  ageGroupParams,
  defaultPassengerAmount,
  passengerValidator,
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
            passengerValidator={passengerValidator}
            userPassengerAmount={userPassengerAmount}
            setUserPassengerAmount={setUserPassengerAmount}
            setUserPassengerAmountText={setUserPassengerAmountText}
          />
        </div>
      </div>
    </>
  );
}
