"use client";

import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import getCountryCode from './CountryCode';
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { US } from 'country-flag-icons/react/1x1';

interface FancyCardProps {
    name: string;
    description: string;
    id: string;
    nationality: string;
    imageURL: string;
    club: string;
  }
  

  const FancyCard: React.FC<FancyCardProps> = ({ name, id, description, nationality, club, imageURL  }) => {
    const countryCode = getCountryCode(nationality);
    return (
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        {nationality} {getUnicodeFlagIcon(getCountryCode(nationality))}<br/>
        {club}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={imageURL}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            
          >
            <span style={{ color: 'black' }}>{description}</span>
          </CardItem>

        </div>
      </CardBody>
    </CardContainer>
    );
  };
  
  export default FancyCard;