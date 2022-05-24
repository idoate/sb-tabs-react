import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tab } from "./Tab";

export default {
    title: "Tarefa/Tab",
    component: Tab,

    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => (
    <Tab {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    tabName: 'tab 1',
    tabText: 'Texto do primeiro tab',
};

export const Secondary = Template.bind({});
Secondary.args = {
    tabName: 'tab 2',
    tabText: 'Texto do segundo tab',
};




