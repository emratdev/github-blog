import Articles from "./_components/Articles";
import Post from "./_components/Post";

const Page = async () => {
  return (
    <section>
      <Post />
      <Articles />
    </section>
  );
};

export default Page;
