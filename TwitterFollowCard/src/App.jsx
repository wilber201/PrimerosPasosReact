import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard
        _userImage="wilber201"
        _nombre="Wilber"
        _username="@Wilber201"
      />
      <TwitterFollowCard
        _userImage="midudev"
        _nombre="midudev"
        _username="@midudev"
      />
      <TwitterFollowCard
        _userImage="Guinxu"
        _nombre="Guinxu"
        _username="@Guinxu"
      />
    </>
  );
}
