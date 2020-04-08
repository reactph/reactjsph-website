import React from "react"
import { Box } from "rebass"

import TeamMember from "./teamMember"

const TeamPage = ({
  members,
  isFirstPage,
  isCurrent,
  highlightedMemberId,
  setHighlightedMemberId,
  sx,
  ...props
}) => (
  <Box
    width="100%"
    {...props}
    sx={{
      visibility: ["hidden", null, isCurrent ? "visible" : "hidden"],
      ...sx,
    }}
  >
    {isFirstPage && (
      <Box display="flex" justifyContent="center" width="100%" mb={[2, 3, 4]}>
        <TeamMember
          member={members[0]}
          isHidden={[false, null, !isCurrent]}
          isHighlighted={highlightedMemberId === members[0].id}
          onMouseEnter={() => setHighlightedMemberId(members[0].id)}
          width={["100%", "auto"]}
        />
      </Box>
    )}
    <Box
      minWidth="100%"
      sx={{
        display: "grid",
        gridTemplateColumns: [
          "1fr",
          "1fr 1fr",
          "repeat(auto-fit, minmax(16rem, 1fr))",
        ],
        gridRowGap: [2, 3, 4],
        gridColumnGap: 4,
      }}
    >
      {(isFirstPage ? members.slice(1) : members).map(member => (
        <TeamMember
          key={member.id}
          member={member}
          isHidden={[false, null, !isCurrent]}
          isHighlighted={highlightedMemberId === member.id}
          onMouseEnter={() => setHighlightedMemberId(member.id)}
        />
      ))}
    </Box>
  </Box>
)

export default TeamPage
