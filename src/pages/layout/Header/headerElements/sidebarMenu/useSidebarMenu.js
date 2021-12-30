import { Icon } from "@iconify/react";

const useSidebarMenu = (codeMatch) => {
  const sidebarContent = {
    id: "root",
    name: "Day Program",
    children: codeMatch.schedule.map((item, index) => {
      return {
        id: item._id,
        name: item.date,
        icon: <Icon icon='akar-icons:calendar' color='#ea5933' width='50' />,
        children: [
          {
            id: `morning-events-id-${index}`,
            name: "morning-events",
            icon: <Icon icon='ic:twotone-emoji-events' color='#ea5933' />,
            children: item.morningEvents.map((event) => {
              return {
                id: event._id,
                name: event.name,
              };
            }),
          },
          {
            id: `lunch-id-${index}`,
            name: "lunch",
            icon: <Icon icon='emojione:shallow-pan-of-food' />,
            children: item.lunch.map((lunch) => {
              return {
                id: lunch._id,
                name: lunch.name,
              };
            }),
          },
          {
            id: `afternoon-events-id-${index}`,
            name: "afternoon-events",
            icon: <Icon icon='ic:twotone-emoji-events' color='#ea5933' />,
            children: item.afternoonEvents.map((event) => {
              return {
                id: event._id,
                name: event.name,
              };
            }),
          },
          {
            id: `dinner-id-${index}`,
            name: "dinner",
            icon: <Icon icon='cil:dinner' color='#ea5933' />,
            children: item.dinner.map((dinner, index) => {
              return {
                id: dinner._id,
                name: dinner.name,
              };
            }),
          },
        ],
      };
    }),
  };
  return { sidebarContent };
};

export default useSidebarMenu;
