import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
// import TeamBiosSection from "./../../components/TeamBiosSection";
import NewsletterSection from "./../../components/NewsletterSection";
import ContactSection from "./../../components/ContactSection";
// import PricingSection from "./../../components/PricingSection";
import StatsSection from "./../../components/StatsSection";
import Footer from "./../../components/Footer";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection
        color="white"
        size="medium"
        title="脱毛専用トータルシステム"
        subtitle="脱毛専用のカウンセリング予約フォーム、基幹システム、会員サイトをセットで簡単に導入する。"
        buttonText="Get Started"
        image="https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="機能"
        subtitle="脱毛サロンに必要な機能がすべて揃う"
      />
      {/* <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
      /> */}
      <NewsletterSection
        color="white"
        size="medium"
        title="メルマガを無料で購読"
        subtitle="脱毛関連のニュースをゲット"
        buttonText="購読"
        inputPlaceholder="メールアドレス"
        subscribedMessage="You are now subscribed!"
      />
      <ContactSection
        color="white"
        size="medium"
        title="お問い合わせ"
        subtitle=""
        showNameField={true}
        buttonText="Send message"
      />
      {/* <PricingSection color="white" size="medium" title="Pricing" subtitle="" /> */}
      {/* <StatsSection
        color="white"
        size="medium"
        items={[
          {
            title: "Tweets",
            stat: "3,456"
          },
          {
            title: "Following",
            stat: "123"
          },
          {
            title: "Followers",
            stat: "456k"
          },
          {
            title: "Likes",
            stat: "789"
          }
        ]}
      /> */}
      <Footer
        color="white"
        size="medium"
        logo="https://uploads.divjoy.com/logo.svg"
        description="A short description of what you do here"
        copywrite="© 2019 Company"
      />
    </>
  );
}

export default HomePage;
