 import { FootballTeamItem } from "./FootballTeamItem"


 export default function FootballTeamList({ teams }) {
  console.log(teams) 
  return (
      <ul className="divide-y divide-gray-200">
        {teams.map((team) => <FootballTeamItem key={team.identifier} team={team} />)}
      </ul>
    )
  }