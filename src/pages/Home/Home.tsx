import React from 'react';
import s from "./Home.module.scss";

interface HomeProps {

}

export const Home = (props: HomeProps) => {
    return(<div className={s.home}>
        Home
    </div>);
}