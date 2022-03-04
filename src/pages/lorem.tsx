import Link from 'next/link';

export default function Terms() {
  return (
    <div className="mt-24 flex flex-col place-items-center">
      <div className="w-full max-w-5xl rounded-lg bg-polar-300 p-6 text-white">
        <h2 className="text-4xl font-bold text-snow-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
      </div>
      <div className="mt-3 w-full max-w-5xl rounded-lg bg-polar-300 p-4 text-white">
        <span className="font-medium text-snow-200 lg:text-xl">
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
        <div className="ml-8 mt-3 mb-5 text-snow-100">
          <li>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <span className="text-aurora-red-300"> Lorem</span> or
            <span className="text-frost-300"> Lorem</span>.
          </li>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </li>
          <li>
            These bitches love Sosa, O end or no end
Fuckin' with them O boys, you gon' get fucked over
'Raris and Rovers, these hoes love Chief Sosa
Hit him with that Cobra, now that boy slumped over
          </li>
        </div>
        <span className="font-medium text-snow-300 lg:text-xl">
          Lorem
        </span>
        <div className="ml-8 mt-3 mb-8 text-snow-100">
          <li>
            They do it all for Sosa, you boys ain't making no noise
Y'all know I'm a grown boy, your clique full of broke boys
God, y'all some broke boys, God, y'all some broke boys
We GBE dope boys, we got lots of dough, boy
          </li>
          <li>
            These bitches love Sosa, O end or no end
Fuckin' with them O boys, you gon' get fucked over
'Raris and Rovers, these hoes love Chief Sosa
Hit him with that Cobra, now that boy slumped over
They do it all for Sosa, you boys ain't making no noise
          </li>
          <li>
            Following the&nbsp;
            <Link href="https://youtu.be/YWyHZNBz6FE">
              <a
                className=" text-frost-300 underline underline-offset-2 hover:text-frost-400"
                target="_blank"
              >
                Sosa&apos;s World
              </a>
            </Link>
           Y'all know I'm a grown boy, your clique full of broke boys
God, y'all some broke boys, God, y'all some broke boys
We GBE dope boys, we got lots of dough, boy
          </li>
          <li>
            These bitches love Sosa, O end or no end
Fuckin' with them O boys, you gon' get fucked over
          </li>
        </div>
        <span className="font-medium text-snow-200 lg:text-xl">
         Sosa Lorem
        </span>
        <div className="ml-8 mt-3 mb-8 text-snow-100">
          <li>
            'Raris and Rovers, these hoes love Chief Sosa
Hit him with that Cobra, now that boy slumped over
          </li>
          <li>
           Yeah
          </li>
          <li>
            Yeah
          </li>
        </div>
      </div>
      <div className="mt-3 w-full max-w-5xl rounded-lg bg-polar-200 p-6 text-white">
        <div className="text-center font-bold">
          Lorem was last updated on the: &quot;2nd March 2022&quot;
        </div>
        <div className="mt-2 text-center">
          We Reserve the right to update the Lorem at any given time.
        </div>
      </div>
    </div>
  );
}
