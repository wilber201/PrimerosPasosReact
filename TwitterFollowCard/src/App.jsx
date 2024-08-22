import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
	return (
		<>
			<TwitterFollowCard _isFollowing={true} _userImage="wilber201" _username="@Wilber201">
				Wilber
			</TwitterFollowCard>

			<TwitterFollowCard _isFollowing={true} _userImage="midudev" _username="@midudev">
				Midudev
			</TwitterFollowCard>

			<TwitterFollowCard _userImage="Guinxu" _username="@Guinxu">
				Guinxu
			</TwitterFollowCard>
		</>
	);
}
