import React, {Component} from 'react'
import {render} from 'react-dom'

let dungeonData = {
    totalRooms: 8,
    totalHallways: 12,
    totalMonsters:15,
    gold: 100
}

class DungeonStat extends Component {
    render() {
        const {totalrooms, hallways, monsters, gold} = this.props
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
                    <p>Gold: {gold}</p>
                </div>
            </section>
        )
    }
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