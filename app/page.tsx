import Header from "@/components/header";
import Herobanner from "@/components/herobanner";
import Subscriptions from "@/components/subscriptions";
import FaqList from "@/components/faqList";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header className="container max-w-7xl">
        <Navbar />
      </header>
      <Header title="Organize your raids easily." text="Watch demo" button>
        Effortlessly schedule raids, view your raiding history, and create new
        exciting adventures for your guild. Say goodbye to the hassle!
      </Header>
      <Herobanner />

      <Header title="Pricing">
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </Header>
      <Subscriptions />

      <Header title="FAQ">
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </Header>
      <FaqList />

      <Footer />
    </>
  );
}
