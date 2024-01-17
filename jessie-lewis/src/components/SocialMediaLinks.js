import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const SocialMediaLinks = () => {
  return (
    <ul className="flex font-poppins text-dark">
      <li className="mr-2">
        Instagram
        <span>
          <AiOutlineInstagram />
        </span>
      </li>
      <li className="mr-2">
        Facebook
        <span>
          <AiOutlineFacebook />
        </span>
      </li>
      <li className="mr-2">
        Twitter
        <span>
          <AiOutlineTwitter />
        </span>
      </li>
      <li>
        Youtube
        <span>
          <AiOutlineYoutube />
        </span>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
