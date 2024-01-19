import { FaUser, FaUsers, FaMicrophone } from "react-icons/fa";
import about from "../../images/about-me.jpeg";
import banner from "../../images/banner.jpeg";
const servicesData = {
  services: [
    {
      serviceName: "1 on 1 mental coaching",
      shortServiceIntro:
        "Personalized coaching sessions tailored to enhance your mental performance.",
      serviceDescription:
        "Experience the benefits of individualized coaching with strategies designed to address your unique needs. Unlock your full potential and achieve peak mental performance.",
      servicesIcon: <FaUser />,
    },
    {
      serviceName: "For teams and organizations",
      shortServiceIntro:
        "Tailored programs for teams and organizations to optimize collective mental performance.",
      serviceDescription:
        "Elevate your team's mental performance with customized workshops and training programs. Foster collaboration, resilience, and excellence within your group or organization.",
      servicesIcon: <FaUsers />,
    },
    {
      serviceName: "Speaking engagements",
      shortServiceIntro:
        "Engaging talks and presentations on mental performance for events and conferences.",
      serviceDescription:
        "Invite our expert speaker to your event for insightful discussions on mental performance. Inspire your audience with practical strategies to enhance mental well-being and productivity.",
      servicesIcon: <FaMicrophone />,
    },
  ],
};

export default servicesData;
