import { memo } from 'react';
import TypeWriter from 'typewriter-effect';
import GraphemeSplitter from 'grapheme-splitter';

function TypeWrite() {
  return (
    <TypeWriter
      onInit={(typewriter) => {
        typewriter
          .typeString(
            '💻  Web developer • ⚛️  React fan • <span class="js-emoji">🟨</span>  JS enthousiast',
          )
          .start();
      }}
      options={{
        wrapperClassName: 'text-2xl',
        cursorClassName: 'text-teal-400 text-2xl',
        /** @ts-ignore: typing error in library */
        stringSplitter: (string) => {
          const splitter = new GraphemeSplitter();
          return splitter.splitGraphemes(string);
        },
      }}
    />
  );
}

export default memo(TypeWrite);
