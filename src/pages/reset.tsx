import {Toaster} from 'react-hot-toast';
import {sendToast} from '../utils/sendToast';
import Button from '../components/interactive/button';
import {AtSymbolIcon} from '@heroicons/react/outline';

export default function PasswordReset() {
  return (
    <>
      <Toaster />
      <div className="mx-auto bg-polar-100 sm:px-6">
        <div className="flex h-screen items-center justify-center">
          <form className="w-full max-w-md">
            <div className="rounded-lg bg-polar-200 px-8 py-8">
              <div className="divide-y-2 divide-frost-300">
                <div className="mb-2 text-xl font-bold text-white">
                  Password Reset
                </div>
                <div />
              </div>
              <label className="relative mt-5 block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <AtSymbolIcon className="h-6 w-6 text-white" />
                </span>
                <input
                  className="delay-50 block h-8 w-full rounded-md bg-polar-600 py-2 pl-10 text-white caret-white shadow-sm transition duration-700 placeholder:text-gray-400 hover:bg-polar-400 focus:outline-none sm:text-sm"
                  placeholder="Email Address"
                  type="text"
                  name="email"
                />
              </label>
              <div className="mt-4">
                <Button
                  cname="w-full"
                  onClick={() =>
                    sendToast(
                      'Successfully sent instructions on how to reset your password.',
                      'success'
                    )
                  }
                >
                  Send Reset Link
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
