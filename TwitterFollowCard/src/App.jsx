import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
	return (
		<>
			<TwitterFollowCard userImage="wilber201" username="@Wilber201">
				Wilber
			</TwitterFollowCard>

			<TwitterFollowCard userImage="midudev" username="@midudev">
				Midudev
			</TwitterFollowCard>
		</>
	);
}
