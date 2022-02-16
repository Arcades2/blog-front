import githubDark from '../imgs/GitHub-Mark.png';
import githubLight from '../imgs/GitHub-Mark-Light.png';
import useStore from '../store';
import AnimatedBackground from '~/components/AnimatedBackground';
import TypeWrite from '~/components/TypeWrite';

function Index() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <>
      <AnimatedBackground />
      <div className="flex flex-col justify-center items-center h-[95vh]">
        <div className="text-right">
          <h1 className="text-[10rem] leading-[10rem]">
            Etienne
            <br />
            Peret
          </h1>
        </div>
        <div>
          <TypeWrite />
          <p className="mt-10 text-center">
            <a
              className="inline-flex flex-col items-center justify-center hover:underline"
              href="http://github.com/Arcades2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={darkMode ? githubLight : githubDark}
                alt="GitHub logo"
                width={32}
                height={32}
              />{' '}
              GitHub
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
