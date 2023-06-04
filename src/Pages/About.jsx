import React from "react";
import "../Styles/Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import Image2 from "../Images/彭康彧.jpg";
import Image4 from "../Images/image4.jpg";

const About = () => {
  return (
    <div id="model3" className="mt-10">
      <div className=""></div>
      <div className="members flex align-center justify-center flex-col lg:flex-row">
        <section className="flex align-center justify-center flex-col md:flex-row ">
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image4} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">凃建名</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p>簡介</p>
              <p>簡介</p>
              <p>簡介</p>
              <p className=" mb-4 ">簡介</p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image2} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">彭康彧</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p>彭康彧 aka 康康</p>
              <p>中央大學數學系 ➡️ 資工系</p>
              <p>吉巴神🔥</p>
              <p className=" mb-4 ">資料庫ㄌㄢ波萬☝🏼</p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
        </section>
        <section className="flex align-center justify-center flex-col lg:flex-row">
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image4} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">蔡明翰</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p>蔡明翰 aka 雪花冰</p>
              <p>中央大學資工系</p>
              <p>簡介</p>
              <p className=" mb-4 ">簡介</p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image4} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">楊晴方</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p>楊晴方</p>
              <p>簡介</p>
              <p>簡介</p>
              <p className=" mb-4 ">簡介</p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image4} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">陳品蓁</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p>陳品蓁</p>
              <p>簡介</p>
              <p>簡介</p>
              <p className=" mb-4 ">簡介</p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
