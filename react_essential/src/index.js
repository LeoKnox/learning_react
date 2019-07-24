import React, {Component} from 'react'
import {render} from 'react-dom'

let dungeonData = {
    totalRooms: 8,
    totalHallways: 12,
    totalMonsters:15,
    gold: 100
}

const getPercent = decimal => {
    return decimal+'mpr'
}

const calcMonster = (total, rooms) => {
    return getPercent(total/rooms)
}

const DungeonStat = ({totalrooms, hallways, monsters, gold}) => {
    return (
            <section>
                <div>
                    <p>Total Rooms: {totalrooms}</p>
                </div>
                <div>
                    <p>Total Hallways: {hallways}</p>
                </div>
                <div>
                    <p>Total Monsters: {monsters}</p>
                </div>
                <div>
                    <p>Gold: {calcMonster(monsters, totalrooms)}</p>
                </div>
            </section>
    )
}

render (
    <DungeonStat
        totalrooms={dungeonData.totalRooms}
        hallways={dungeonData.totalHallways}
        monsters={dungeonData.totalMonsters}
        gold={dungeonData.gold}    
    />,
    document.getElementById("root")
)