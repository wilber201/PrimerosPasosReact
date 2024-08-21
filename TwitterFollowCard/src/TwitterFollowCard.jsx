export function TwitterFollowCard({ _userImage, _nombre, _username }) {
  return (
    <article className="twitter-card">
      <header className="twitter-header">
        <img
          src={`https://unavatar.io/${_userImage}`}
          alt="Wilber,Avatar"
          class="twitter-avatar"
        />
        <div>
          <strong>{_nombre}</strong>
          <br></br>
          <span class="twitter-handle">{_username}</span>
        </div>
      </header>
      <aside>
        <button className="twitter-follow-btn">Follow</button>
      </aside>
    </article>
  );
}
