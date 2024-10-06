import React from "react";
import { Text } from "@/components/Text";
import Image from "next/image";
import ImageAcaReact from "@/assets/Image-acaReact.png";

export const Hero = () => {
  return (
    <div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container ">
        <div className="flex flex-col items-center">
          <div>
            <Image
              src={ImageAcaReact}
              alt="acaReact"
              height={500}
              width={500}
            />
          </div>
          <div>
            <Text
              title="B.Eng. Technische Informatik"
              className="text-center"
            />
            <Text colorTitle="Amir Aschkan Chizari" className="text-center" />
            <Text
              description="Entwicklung einer App als Reaktionsmessgerät für die Ermittlung motorisch-kognitiver Fähigkeiten"
              className="text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
