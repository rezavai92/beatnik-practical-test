import React from 'react'
import Member from '../member/member'
import './team.css'
const Team = (props)=>{

    const members= [ 
    { source: require('../Team/team_resource/man-1.png') , name:"Joh Doe",designation :"Founder-BOZIO"},
    { source: require('../Team/team_resource/man2.png') , name:"Joh Doe",designation :"Founder-BOZIO"},
    { source: require('../Team/team_resource/man3.png') , name:"Joh Doe",designation :"Founder-BOZIO"},
    { source: require('../Team/team_resource/man4.PNG') , name:"Joh Doe",designation :"Founder-BOZIO"},
    { source: require('../Team/team_resource/woman5.PNG') , name:"Joh Doe",designation :"Founder-BOZIO"},
    { source: require('../Team/team_resource/man6.PNG') , name:"Joh Doe",designation :"Founder-BOZIO"},
    { source: require('../Team/team_resource/man7r.PNG') , name:"Joh Doe",designation :"Founder-BOZIO"},
    { source: require('../Team/team_resource/man8.PNG') , name:"Joh Doe",designation :"Founder-BOZIO"},
    { source: require('../Team/team_resource/man9.PNG') , name:"Joh Doe",designation :"Founder-BOZIO"}
    


];

const Members = members.map((m)=>{
    return (
        <Member source={m.source} name={m.name} designation={m.designation} > </Member>
    )
})

    return (

            <div className="team-wrapper1">
                {Members}
            </div>
            )


}

export default Team;