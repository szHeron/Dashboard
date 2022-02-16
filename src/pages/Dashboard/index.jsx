import React from 'react';
import Milestones from '../../components/Milestones';
import Revenue from '../../components/Revenue';
import Visits from '../../components/Visits'

export default function Dashboard() {
  return (
    <div className="dashboard">
        <div className="wrapper">
        Painel de controle
            <div className="one">
                <Milestones/>
            </div>
            <div className="two">
                <Revenue/>
                <Visits/>
            </div>
        </div>
    </div>
  )
}
