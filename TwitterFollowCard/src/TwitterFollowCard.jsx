import { useState } from "react";

export function TwitterFollowCard({ children, userImage, username }) {
	const [isFollowing, setIsFollowing] = useState(false);

	const text = isFollowing ? "Siguiendo" : "Seguir";
	const followButtonClass = isFollowing ? "twitter-follow-btn isFollowing" : "twitter-follow-btn";

	const handleClick = () => {
		setIsFollowing(!isFollowing);
	};

	return (
		<article className="twitter-card">
			<header className="twitter-header">
				<img src={`https://unavatar.io/${userImage}`} alt="Wilber,Avatar" className="twitter-avatar" />
				<div>
					<strong>{children}</strong>
					<br></br>
					<span className="twitter-handle">{username}</span>
				</div>
			</header>
			<aside>
				<button className={followButtonClass} onClick={handleClick}>
					<span className="twitter-follow-seguir">{text}</span>
					<span className="twitter-follow-dejar">Dejar de seguir</span>
				</button>
			</aside>
		</article>
	);
}
