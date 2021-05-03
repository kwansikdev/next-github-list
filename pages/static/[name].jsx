import fetch from "isomorphic-unfetch";

const name = ({ user, time }) => {
  const username = user && user.name;
  return (
    <div>
      {username}
      {time}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const response = await fetch(`https://api.github.com/users/${params.name}`);
    const user = await response.json();

    if (response.status === 200) {
      const user = await response.json();
      return {
        props: { user, time: new Date().toISOString() },
      };
    }
    return { props: { time: new Date().toISOString() } };
  } catch (Error) {
    console.log(Error);
    return { props: { time: new Date().toISOString() } };
  }
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "kwansikdev" } }],
    fallback: true,
  };
}

export default name;
