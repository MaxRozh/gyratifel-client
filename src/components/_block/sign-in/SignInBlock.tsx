import React from 'react';
import { useTranslation } from 'next-i18next';

function InputGroup({
  // className = '',
  // label = '',
  name = '',
  type = 'text',
  placeholder = ''
  // error = false,
  // errorText = '',
  // defaultValue = '',
  // description = '',
  // horizontal = false,
  // onChange,
  // ...newProps
}) {
  // const hasError = error || errorText;
  // const finalClass = `${className}  ${
  //   hasError && 'border-red-600'
  // }`;

  return (
    <div>
      {/*{label && (*/}
      {/*  <label*/}
      {/*    className={`text-sm text-gray-600 ${hasError && 'text-red-600'} ${horizontal && 'sm:w-24'}`}*/}
      {/*    htmlFor={name}*/}
      {/*  >*/}
      {/*    {label}*/}
      {/*  </label>*/}
      {/*)}*/}
      <div>
        <input
          type={type}
          name={name}
          // eslint-disable-next-line max-len
          className="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
          placeholder={placeholder}
          // defaultValue={defaultValue}
          // onChange={(e) => onChange(e.currentTarget.value)}
          // {...newProps}
        />
        {/*{description && <span className="mt-2 text-gray-600 text-xs">{description}</span>}*/}
        {/* eslint-disable-next-line max-len */}
        {/*{errorText && <div className="bg-red-200 mt-2 py-2 px-4 text-xs text-red-600 rounded-sm">{errorText}</div>}*/}
      </div>
    </div>
  );
}

function SignInBlock() {
  const { t } = useTranslation('home');

  return (
    <div className="w-5/6 sm:w-2/3 md:w-1/2 my-24 py-6 px-6 shadow mx-auto rounded-sm">
      <form className="w-full mx-auto text-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{t('welcome')}</h2>
          <p className="mt-3 text-gray-800">
            {t('newly')}{' '}
            <a href="#" className="text-blue-400">
              {t('sign_up')}
            </a>
          </p>
        </div>
        <div className="mt-12">
          <div className="my-6">
            <InputGroup type="email" name="email" placeholder="Your email address" />
          </div>
          <div className="my-6">
            <InputGroup type="password" name="password" placeholder="Your password" />
          </div>
          <div className="my-6">
            <button
              type="submit"
              // eslint-disable-next-line max-len
              className="px-12 py-4 bg-gradient-to-r from-blue-400 to-blue-800 hover:from-blue-800 tracking-wide text-white font-medium rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
            >
              {t('sign_in')}
            </button>
          </div>
          <div className="text-right">
            <a href="#" className="text-blue-400">
              {t('forgot')}
            </a>
          </div>
          <div className="mt-4">
            <p className="text-left text-gray-800">{t('or_login')}</p>
            <div className="mt-2 grid grid-cols-2 gap-6 text-black text-1xl">
              <a
                href="#"
                // eslint-disable-next-line max-len
                className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
              >
                Facebook
              </a>
              <a
                href="#"
                // eslint-disable-next-line max-len
                className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
              >
                Google
              </a>
            </div>
          </div>
          <div className="mt-6 border-t border-b border-gray-300">
            <div className="my-6">
              <div className="w-full flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  defaultChecked
                  // onChange={(e) => onChange(e.currentTarget.checked)}
                  // eslint-disable-next-line max-len
                  className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-blue-400"
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="ml-2 text-sm" htmlFor="rememberMe">
                  {t('remember')}
                </label>
              </div>
            </div>
          </div>
          <p className="text-sm mt-6 text-left">
            {t('accept')}{' '}
            <a href="#" className="text-blue-400">
              Terms of Use
            </a>{' '}
            {t('and')}{' '}
            <a href="#" className="text-blue-400">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignInBlock;
