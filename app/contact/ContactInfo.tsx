import React from "react";

import { RxPerson } from "react-icons/rx";
import { TiBusinessCard } from "react-icons/ti";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

interface PersonInfoProps {
  name: string;
  title: string;
  cell: string;
  email: string;
}

const PersonInfo: React.FC<PersonInfoProps> = ({
  name,
  title,
  cell,
  email,
}) => {
  return (
    <div className="my-8 flex flex-col w-full items-start pl-16 xl:pl-0">
      <h3 className="flex">
        <RxPerson size={26} className="mr-5" /> {name}
      </h3>
      <h3 className="flex">
        <TiBusinessCard size={26} className="mr-5" />
        {title}
      </h3>
      <h3 className="flex">
        <MdOutlinePhoneIphone size={26} className="mr-5" />
        {cell}
      </h3>
      <h3 className="flex hover:underline hover:underline-offset-2">
        <HiOutlineMail size={26} className="mr-5" />
        {email}
      </h3>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex md:flex-col items-start justify-between">
      <PersonInfo
        name="Alfonso Cordova"
        title="Owner"
        cell="(909) 556-9844"
        email="ac@afrackinstallations.com"
      />
      <PersonInfo
        name="Angel Cordova"
        title="Project Manager"
        cell="(562) 447-7629"
        email="Angelfcb01@yahoo.com"
      />
      <PersonInfo
        name="John Hernandez"
        title="Project Manager"
        cell="(714) 229-6916"
        email="jh@afrackinstallations.com
        "
      />
      <PersonInfo
        name="Selma Castañeda"
        title="Secretary"
        cell="(562) 715-8824"
        email="afracking@yahoo.com"
      />
    </div>
  );
};

export default ContactInfo;
