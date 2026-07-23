import { members } from "../data/members";

export function getMemberStaticPaths() {
  return members.map((member) => ({
    params: { id: member.id },
    props: { member },
  }));
}
