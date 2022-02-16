import type { MutableRefObject } from 'react';
import { useRef, useEffect } from 'react';
import { Form, useTransition, useLoaderData } from 'remix';

function NewComment() {
  const transition = useTransition();
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const { commentState } = useLoaderData();

  useEffect(() => {
    if (transition.state === 'submitting' && formRef.current) {
      formRef.current.reset();
    }
  }, [transition]);

  return (
    <Form ref={formRef} method="post" className="flex flex-col items-end">
      <label htmlFor="comment" className="w-full">
        <span className="block text-gray-700 text-sm font-bold mb-2 dark:text-white ">
          Comment
        </span>
        <textarea
          id="comment"
          minLength={3}
          maxLength={500}
          className="w-full h-32 text-black px-4 py-2 border rounded-md shadow-inner"
          name="content"
          placeholder="Write your comment here..."
        />
      </label>
      <div className="flex items-center gap-5">
        {commentState && (
          <p
            className={`${
              commentState.state === 'success'
                ? 'text-green-400'
                : 'text-red-400'
            }`}
          >
            {commentState.message}
          </p>
        )}
        <button className="bg-teal-400 py-2 px-4 rounded-md" type="submit">
          {transition.state === 'submitting' ? 'Creating...' : 'Create'}
        </button>
      </div>
    </Form>
  );
}

export default NewComment;
