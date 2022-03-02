import { FC } from "react";
import Image from "next/image";
interface TestimonialBox {
  user: string;
  content: object | string;
  avatar: string;
}

const TestimonialBox: FC<TestimonialBox> = ({ user, content, avatar }) => {
  return (
    <div className="p-6 rounded-md mx-auto w-full flex flex-col justify-items-center items-center lg:pt-20">
      <Image
        src={avatar}
        alt="Avatar"
        height="100"
        width="100"
        className="rounded-full mx-auto"
        layout="fixed"
        quality={20}
      />
      <div className="flex items-baseline justify-between mb-4 mt-4">
        <h4 className="text-xl font-bold lg:text-2xl text-center mx-auto mb-2">
          {user}
        </h4>
      </div>
      <p className=" text-lg font-medium opacity-80 text-center">“{content}”</p>
    </div>
  );
};

export default TestimonialBox;
