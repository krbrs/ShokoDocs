import {useState} from "react";

export default {
    logo: <span>ShokoDocs</span>,
    project: {
        link: 'https://github.com/shuding/nextra'
    },
    chat: {
        link: 'https://google.com'
    },
    sidebar: {
        toggleButton: true,
    },
    gitTimestamp: ({ timestamp, commit }) => (
        <span>Last updated: {timestamp.toLocaleDateString()} {commit}</span>
    ),
    navigation: {
        prev: true,
        next: true,

    }

}
