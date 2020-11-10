import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "カウンセリング予約フォーム",
                body:
                  "24時間、３６５日いつでもカウンセリング予約の受付が可能になります。",
                image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
                link: "/Features/1"
              },
              {
                title: "基幹システム",
                body: "カルテ管理、会員管理、予約管理、役務管理など",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
                link: "/Features/2"
              },
              {
                title: "会員サイト",
                body: "会員ログイン、施術予約、お知らせ、会員情報確認",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
                link: "/Features/3"
              },
              {
                title: "データ集計・分析",
                body:
                  "BIツールを使用し、データベースから必要な情報をリアルタイムに集計・分析できるようにする。",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
                link: "/Features/4"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
