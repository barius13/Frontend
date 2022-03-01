import { FC } from "react";

interface TestimonialBox {
  user: string;
  content: object | string;
  avatar: string;
}

const TestimonialBox: FC<TestimonialBox> = ({ user, content, avatar }) => {
  return (
    <div className="p-6 rounded-md w-full lg:pt-20">
      <img
        src={avatar}
        alt=""
        height="60"
        width="100"
        className="rounded-full mx-auto "
      />
      <div className="flex items-baseline justify-between mb-4 mt-4">
        <h4 className="text-xl font-bold lg:text-2xl text-center mx-auto mb-2">
          {user}
        </h4>
      </div>
      <p className=" text-lg text-zinc-300 font-light text-center">“{content}”</p>
    </div>
  );
};

export default TestimonialBox;
