import {useRef, useCallback, useEffect} from 'react';
import {Title} from '../components';
import {Input} from '../theme/daisyui';
import { getValue } from '@testing-library/user-event/dist/utils';

export default function ForwardRefTest() {


  const inputRef = useRef<HTMLInputElement>(null);
  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])

  useEffect(() => inputRef.current?.focus(), [])


  return (
    <section className="mt-4">
      <Title>ForwardRefTest</Title>
      <div className="flex flex-center mt-4">
        <div className='flex flex-col w-1/3 p-2'>
          <button onClick={getValue} className='mt-4 btn btn-primary'>
            get value
          </button>
        </div>
      </div>
    </section>
  );
}
