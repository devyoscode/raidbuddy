import React from "react";
import Subscription from "@/components/subscription";
import Feature from "@/components/feature";

const Subscriptions = () => {
  return (
    <div className="border-dashed border-2 border-red-500 flex justify-between">
      <Subscription
        price="FREE"
        disclaimer="Borem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Free"
      >
        <Feature check>History</Feature>
        <Feature>Unlimited raids</Feature>
        <Feature>Multiple users</Feature>
      </Subscription>
      <Subscription
        price="$5.00"
        disclaimer="Borem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Individual"
      >
        <Feature check>History</Feature>
        <Feature check>Unlimited raids</Feature>
        <Feature>Multiple users</Feature>
      </Subscription>
      <Subscription
        price="$15.00"
        disclaimer="Borem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Team"
      >
        <Feature check>History</Feature>
        <Feature check>Unlimited raids</Feature>
        <Feature check>Multiple users</Feature>
      </Subscription>
    </div>
  );
};

export default Subscriptions;
