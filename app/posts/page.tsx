import Link from "next/link";

const post = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-between h-full">
        <h1>post page!</h1>
        <p>
          <Link href="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default post;
