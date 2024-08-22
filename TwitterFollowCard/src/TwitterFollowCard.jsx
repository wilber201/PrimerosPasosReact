import { Children } from "react";

export function TwitterFollowCard({ children, _userImage, _username }) {
	return (
		<article className="twitter-card">
			<header className="twitter-header">
				<img src={`https://unavatar.io/${_userImage}`} alt="Wilber,Avatar" className="twitter-avatar" />
				<div>
					<strong>{children}</strong>
					<br></br>
					<span className="twitter-handle">{_username}</span>
				</div>
			</header>
			<aside>
				<button className="twitter-follow-btn">Follow</button>
			</aside>
		</article>
	);
}
