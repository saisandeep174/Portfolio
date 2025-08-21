import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./certifications.css";

export default function Certifications() {
  const certificates = [
    { name: "AWS Cloud Practitioner Essentials", issuer: "AWS Training and Certification", img: "/certs/AWS Cloud Practioner_page-0001.jpg" },
    { name: "Salesforce AI Associate", issuer: "Salesforce", img: "/certs/Salesforce_AIAssociate_page-0001.jpg" },
    { name: "CCNAv7: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", img: "/certs/CCNA.jpg" },
    { name: "Introducing Generative AI with AWS", issuer: "Udacity", img: "/certs/Udacity_rotated_page-0001.jpg" },
    { name: "Data Structures and Algorithms in Java", issuer: "Infosys Springboard", img: "/certs/DSA_Java.jpg" }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className="cert-card">
              <img src={cert.img} alt={cert.name} className="cert-image" />
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">Issued by {cert.issuer}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
