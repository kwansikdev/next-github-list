import { useState } from "react";
import Link from "next/link";

const Index = ({ user }) => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}?page=1`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default Index;
