import React from 'react';
import { useTranslation } from 'next-i18next';

function ResetPassword() {
  const { t } = useTranslation('sign-in');

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">{t('reset.title')}</h1>
            <p className="text-xl text-gray-600">{t('reset.desc')}</p>
          </div>
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
                    {t('reset.email')} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input px-4 py-2 w-full border text-gray-800"
                    placeholder={t('reset.placeholder')}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    // eslint-disable-next-line max-len
                    className="btn py-2 text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-blue-800 text-white font-medium rounded-md w-full"
                  >
                    {t('reset.send')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
