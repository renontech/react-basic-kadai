export function ProfileCard({profiles, index}) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px'
    }}>
      <h2>{profiles[index].name}</h2>
      <p>【年齢】{profiles[index].age}歳</p>
      <p>【自己紹介】{profiles[index].bio}。</p>
    </div>
  );
};