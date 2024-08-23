import { Children } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
	{
		userImage: "wilber201",
		username: "@wilber201",
		isFollowingStartup: true,
		name: "wilber201",
	},
	{
		userImage: "callofduty",
		username: "@COD",
		isFollowingStartup: false,
		name: "callofduty",
	},
	{
		userImage: "kikobeats",
		username: "@kikobeats",
		isFollowingStartup: true,
		name: "kikobeats",
	},
	{
		userImage: "midudev",
		username: "@midudev",
		isFollowingStartup: true,
		name: "Midudev",
	},
];

export function App() {
	return (
		/*<section className="App">
			{users.map((user) => {
				const { userImage, username, isFollowingStartup, name } = user;
				return (
					<TwitterFollowCard key={username} userImage={userImage} username={username} isFollowingStartup={isFollowingStartup}>
						{name}
					</TwitterFollowCard>
				);
			})}
		</section>*/
		users.map(({ userImage, username, isFollowingStartup, name }) => {
			return (
				<TwitterFollowCard key={username} userImage={userImage} username={username} isFollowingStartup={isFollowingStartup}>
					{name}
				</TwitterFollowCard>
			);
		})
	);
}
