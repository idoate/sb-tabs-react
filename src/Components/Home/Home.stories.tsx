import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Home } from "./Home";

export default {
    title: "Tarefa/Home",
    component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
    <Home {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            name:'tab 1',
            text:'Texto do primeiro tab'
        },
        {
            name:'tab 2',
            text:'Texto do segundo tab'
        },
        {
            name:'tab 3',
            text:'Texto do terceiro tab'
        },
        {
            name:'tab 4',
            text:'Texto do quarto tab'
        }
    ],
};
