import React from 'react';
import { IndicatorSVGSelector } from '../../../../assets/icons/indicators/IndicatorSVGSelector';
import { Item } from './ThisDayInfo';
import s from "./ThisDayInfo.module.scss";

interface ThisDayItemProps {
    item: Item
}

export const ThisDayItem = ({item}: ThisDayItemProps) => {
    const {icon_id, name, value} = item;
    return(<div className={s.item}>
        <div className={s.indicator}>
            <IndicatorSVGSelector id={icon_id}/>
        </div>
        <div className={s.indicator__name}>{name}</div>
        <div className={s.indicator__value}>{value}</div>
    </div>);
}