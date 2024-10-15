export function FootballTeamItem({ team }) {
    return (
      <li className="py-4 flex">
        {/* <img className="h-10 w-10 rounded-full" src={team.logo} alt="" /> */}
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{team.first_name}&nbsp;{team.last_name}</p>
          <p className="text-sm text-gray-500">{team.team}</p>
          <p className="text-sm text-gray-500">{team.position}</p>
        </div>
      </li>
    )
  }